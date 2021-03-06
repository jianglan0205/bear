const string = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*::after,
*::after {
  box-sizing: border-box;
}
.tou {
  position: relative;
  background-color: rgb(255, 248, 181);
  height: 100vh;
  z-index: -4;
}
/* 先来个鼻子 */
.nose {
  position: relative;
  width: 36px;
  height: 32px;
  left: 50%;
  top: 400px;
  margin-left: -18px;
  border-radius: 50%;
  background-color: rgb(147, 91, 69);
  z-index: 3;
}
/* 两个眼睛 */
.eye {
  position: absolute;
  width: 16px;
  height: 10px;
  left: 50%;
  top: 380px;
  margin-left: -8px;
  z-index: 2;
}
.eye.left {
  background-color: rgb(87, 86, 92);
  transform: translateX(-50px) rotate(90deg);
  border-radius: 45%;
}
.eye.right {
  background-color: rgb(87, 86, 92);
  transform: translateX(50px) rotate(90deg);
  border-radius: 45%;
}
/* 然后是脸 */
.yuan1 {
  background-color: rgb(221, 159, 128);
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 300px;
  margin-left: -100px;
  border-radius: 50%;
  z-index: 1;
}
/* 然后是嘴 */
.yuan2 {
  background-color: rgb(255, 218, 170);
  position: absolute;
  width: 104.4px;
  height: 80px;
  left: 50%;
  top: 390px;
  margin-left: -52.2px;
  border-radius: 50%;
  z-index: 2;
}
/* 耳朵 */
.ear {
  background-color: rgb(198, 141, 109);
  position: absolute;
  width: 65px;
  height: 65px;
  left: 50%;
  top: 290px;
  margin-left: -32.5px;
  border-radius: 50%;
  z-index: -2;
}
.ear.left {
  transform: translateX(-80px);
}
.ear.right {
  transform: translateX(80px);
}

.ear2 {
  background-color: rgb(255, 196, 119);
  position: absolute;
  width: 32px;
  height: 32px;
  left: 50%;
  top: 306px;
  margin-left: -16px;
  border-radius: 50%;
  z-index: -1;
}
.ear2.left {
  transform: translateX(-80px);
}
.ear2.right {
  transform: translateX(80px);
}
/* 然后是蝴蝶结 */
.bow1 {
  background-color: rgb(204, 248, 255);
  position: absolute;
  width: 34.8px;
  height: 30px;
  left: 50%;
  top: 500px;
  margin-left: -17.4px;
  border-radius: 50%;
  z-index: 4;
}
.bow2 {
  background-color: rgb(125, 231, 255);
  position: absolute;
  width: 34.8px;
  height: 28px;
  left: 50%;
  top: 500px;
  margin-left: -17.4px;
  border-radius: 30% 90% 90% 30% / 50% 50% 50% 50%;
  z-index: 3;
}
.bow2.left {
  transform: translateX(-30px);
}
.bow2.right {
  transform: translateX(30px) rotate(180deg);
}
.bow3 {
  background-color: rgb(159, 246, 255);
  position: absolute;
  width: 70px;
  height: 56px;
  left: 50%;
  top: 486px;
  margin-left: -35px;
  border-radius: 30% 90% 90% 30% / 50% 50% 50% 50%;
  z-index: 2;
}
.bow3.left {
  transform: translateX(-30px);
}
.bow3.right {
  transform: translateX(30px) rotate(180deg);
}
/* 最后给个背景板显的可爱 */
.yuan3 {
  background-color: rgb(253, 249, 206);
  position: absolute;
  width: 500px;
  height: 500px;
  left: 50%;
  top: 150px;
  margin-left: -250px;
  border-radius: 50%;
  z-index: -3;
}
  `
export default string;