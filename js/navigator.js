let na = window.navigator
console.log(na)
const displays = navigator.activeVRDisplays
// console.log(displays);
// const name = navigator.appCodeName
// console.log(name)
// 获取充电信息
// const battery = navigator.getBattery().then((ba) => {
//     console.log(ba)
//     // 充电完毕还要多长时间
//     console.log(ba.chargingTime)
//     // 电池能维持多长时间
//     console.log(ba.dischargingTime)
//     // 电池电量
//     console.log(ba.level)
//     // 充电状态改变
//     ba.onchargingchange = () => {
//         // charging 充电状态
//         if (ba.charging) {
//             console.log('来了，老弟')
//         } else {
//             console.log('不冲啦')
//         }
//     }
//     ba.onlevelchange = () => {
//         console.log(`当前电量${ba.level}`)
//     }
// })
// console.log(battery)

// // 获取设备网络连接信息
// const connectionInfo = navigator.connection
// console.log(connectionInfo)

// // 获取联系人
// const contacts = navigator.contacts
// console.log(contacts)

// 获取粘贴
// const theClipboard = navigator.clipboard
// console.log(theClipboard)
// navigator.clipboard.readText().then(
//     (clipText) => { 
//         console.log(clipText)
//      });

// 获取设备内存
// const memory = navigator.deviceMemory
// console.log ("This device has at least " + memory + "GiB of RAM.")

// 获取设备位置信息 只能再https下
// const geo = navigator.geolocation.getCurrentPosition()
// console.log(geo)

// var options = {
//     enableHighAccuracy: true,
//     timeout: 50000,
//     maximumAge: 0
//   };

//   function success(pos) {
//     var crd = pos.coords;
//     console.log(pos)

//     console.log('Your current position is:');
//     console.log('Latitude : ' + crd.latitude);
//     console.log('Longitude: ' + crd.longitude);
//     console.log('More or less ' + crd.accuracy + ' meters.');
//   };

//   function error(err) {
//     console.lof(err)
//     console.warn('ERROR(' + err.code + '): ' + err.message);
//   };
// function showPosition(position) {
//     // x.innerHTML = "Latitude: " + position.coords.latitude +
//     console.log(position)
// }
// navigator.geolocation.getCurrentPosition(showPosition);

// 最大触摸点数
// let touchPoints = navigator.maxTouchPoints;
// console.log(touchPoints)

// // 
// let bilities = navigator.mediaCapabilities
// console.log(bilities)



// ?
// var supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
// console.log(supportedConstraints)

// 获取媒体
// let constraints = {audio: true, video: true}
// let constraints = {
//     audio: true,
//     video: { width: 1280, height: 720 }
//   }
// var promise = navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
//     console.log(stream)
// })

// 想要获取一个最接近 1280x720 的相机分辨率
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // 总是在最后检查错误

// 该对象可提供对相机和麦克风等媒体输入设备的连接访问，也包括屏幕共享。
// var mediaDevices = navigator.mediaDevices;
// console.log(mediaDevices)
// // 获取媒体输入输出设备
// async function show () {
//     var enumeratorPromise = await navigator.mediaDevices.enumerateDevices();
//     console.log(enumeratorPromise)
// }
// show()

// 
// const video = document.querySelector('video')
// video.onplay = () => {
//     // console.log(1)
// }
    let mediaSession = navigator.mediaSession
    console.log(mediaSession)


    // 浏览器联网状态
    let online = navigator.onLine
    console.log(online)
    // 存储 estimate
    let storage = navigator.storage.getDirectory().then((rsp) => {
        console.log(rsp)
    })
    // console.log(storage)