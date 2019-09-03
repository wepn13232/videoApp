<template>
    <div>
        <!--登录框-->
        <van-cell-group>
            <van-field v-model="id" placeholder="请输入APP ID"></van-field>
            <van-field v-model="account" placeholder="请输入用户名"></van-field>
        </van-cell-group>
        <van-button type="info" @click="loginAg">登录</van-button>
        
        <br/>
        <br/>
        
        <!--        发送邀请-->
        <van-cell-group>
            <van-field v-model="invitationID" placeholder="请输入需要邀请的人"></van-field>
        </van-cell-group>
        <van-button type="info" @click="sendInvitation">邀请视频</van-button>
        
        <!--        视频流-->
        <div class="video-grid" id="video" v-if="videoCheck">
            <div class="video-view">
                <div id="local_stream" class="video-placeholder" style="height: 480px;width: 680px"></div>
                <div id="local_video_info" class="video-profile hide"></div>
                <div id="video_autoplay_local" class="autoplay-fallback hide"></div>
            </div>
            <div class="video-view">
                <div id="net" class="video-placeholder" style="height: 480px;width: 680px"></div>
                <!--                <div id="local_video_info" class="video-profile hide"></div>-->
                <!--                <div id="video_autoplay_local" class="autoplay-fallback hide"></div>-->
            </div>
        </div>
        <van-button type="info" @click="turnRight" v-if="videoOn">向右转</van-button>
        <van-button type="info" @click="turnLeft" v-if="videoOn">向左转</van-button>
        <van-button type="info" @click="leave" v-if="videoOn">离开</van-button>
    
    </div>
</template>

<script>
    import AgoraRTM from "agora-rtm-sdk";
    import AgoraRTC from 'agora-rtc-sdk'
    //设置APPID，初始化
    const client = AgoraRTM.createInstance('e66554444b3846cc901eaee5a12dfb69');
    const clientV = AgoraRTC.createClient({mode: 'live', codec: "h264"});

    var rtc = {
        client_V: null,
        joined: false,
        published: false,
        localStream: null,
        remoteStreams: [],
        params: {}
    };


    export default {
        name: "Message",
        data() {
            return {
                id: 'e66554444b3846cc901eaee5a12dfb69',
                account: 'LinQiyuan',
                invitationID: 'MR1108E499220',
                videoOn: false,
                videoCheck: false
            }
        },
        methods: {
            loginAg() {
                // console.log('登录')
                client.login({token: null, uid: this.account}).then(() => {
                    console.log('登录成功(默认自动登录)');
                }).catch(err => {
                    console.log("XXXXXXXX出错了" + err);
                })
            },
            sendInvitation() {
                let _this = this
                console.log('发送邀请')
                //创建邀请实例
                let LocalInvitation = client.createLocalInvitation(this.invitationID)
                // 设置邀请参数
                LocalInvitation.channelId = 'MR1108E499220'
                LocalInvitation.content = this.account + "发送的邀请"
                LocalInvitation.send()
                console.log('发送成功')
                //被叫方接收到邀请
                LocalInvitation.on('LocalInvitationAccepted', function (response) {
                    console.log("已接受邀请")
                    //    初始化视频客户端
                    clientV.init('e66554444b3846cc901eaee5a12dfb69', function () {
                        console.log("AgoraRTC client 初始化完成");
                        clientV.join(null, 'MR1108E499220', null, function (uid) {
                            console.log("User " + uid + " join channel successfully");
                            _this.videoCheck = true
                            _this.videoOn = true;
                            //设置本地流参数
                            var localStream = AgoraRTC.createStream({
                                streamID: uid,
                                audio: true,
                                video: true,
                                screen: false
                            });
                            //    初始化流
                            localStream.init(function () {
                                console.log("getUserMedia successfully");
                                localStream.play('local_stream');
                                rtc.localStream = localStream
                                console.log("++++++++++++++++++初始化完成")
                                console.log("++++++++++++++++++开始发布")
                                clientV.publish(rtc.localStream, function (err) {
                                    console.log("Publish local stream error: " + err);
                                });
                                clientV.on('stream-published', function (evt) {
                                    console.log("Publish local stream successfully");
                                });
                                console.log("++++++++++++++++++发布完成")
                            }, function (err) {
                                console.log("getUserMedia failed", err);
                            });
                            // }
                        }, function (err) {
                            console.log("Join channel failed", err);
                        });
                    }, function (err) {
                        console.log("AgoraRTC client init failed", err);
                    });

                    console.log('+++++++++++++进入远程流监控')
                    clientV.on('stream-added', function (evt) {
                        var stream = evt.stream;
                        console.log("New stream added: " + stream.getId());
                        console.log("Subscribe ", stream);
                        clientV.subscribe(stream, function (err) {
                            console.log("Subscribe stream failed", err);
                        });
                    });

                    clientV.on('stream-subscribed', function (evt) {
                        var stream = evt.stream;
                        console.log("Subscribe remote stream successfully: " + stream.getId());
                        // if ($('div#video #agora_remote'+stream.getId()).length === 0) {
                        //   $('div#video').append('<div id="agora_remote'+stream.getId()+'" style="float:left; width:810px;height:607px;display:inline-block;"></div>');
                        // }
                        stream.play('net');
                    });
                })
            },
            turnRight() {
                client.sendMessageToPeer(
                    {text: '{"intent": "ctrl","common": "turnRight" }'}, // 符合 RtmMessage 接口的参数对象
                    'MR1108E499220', // 远端用户 ID
                ).then(sendResult => {
                    if (sendResult.hasPeerReceived) {
                        console.log("机器人右转")
                    } else {
                        /* 服务器已接收、但远端用户不可达的处理逻辑 */
                        console.log("服务器超时")
                    }
                }).catch(error => {
                    /* 发送失败的处理逻辑 */
                });
            }
            ,
            turnLeft() {
                client.sendMessageToPeer(
                    {text: '{"intent": "ctrl","common": "turnLeft" }'}, // 符合 RtmMessage 接口的参数对象
                    'MR1108E499220', // 远端用户 ID
                ).then(sendResult => {
                    if (sendResult.hasPeerReceived) {
                        console.log("机器人左转")
                    } else {
                        /* 服务器已接收、但远端用户不可达的处理逻辑 */
                        console.log("服务器超时")
                    }
                }).catch(error => {
                    /* 发送失败的处理逻辑 */
                });
            },
            leave() {
                let _this = this
                //初始化客户端
                clientV.leave(function () {
                    console.log("Leave channel successfully");
                    rtc.localStream.stop()
                    rtc.localStream.close()
                    _this.videoCheck = false
                    _this.videoOn = false
                }, function (err) {
                    console.log("Leave channel failed");
                });
            },
        },
        mounted() {
            this.loginAg()
        },
    }

</script>

<style scoped>

</style>
