# Location

  https://codepen.io/Rayeesac/pen/eYJgpVy

.marquee-wrapper{
  background:#2F394C;
  text-align:center;
}
.marquee-wrapper .container{
  overflow:hidden;
  margin:0 auto !important;
  text-align:center;
}
.marquee-inner span{
  height:50%;
}
.marquee-wrapper .marquee-block{
  width: 400px;
  height: 1500px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  margin: 20px 0 20px 220px;
  background:#1B2531;
  padding: 30px 0;
  float:left;
}
.marquee-inner{
  display: block;
  height: 200%;
  width:400px;
  position: absolute;
  margin:20px 0 20px 70px;
}
.marquee-item p{
  font-weight: 800;
  font-size: 30px;
  padding:100px;
  font-family: cursive;
}
.marquee-inner.to-left{
  animation: marqueeTop 25s linear infinite;
}
.marquee-inner.to-right{
  animation: marqueeBottom 25s linear infinite;
}
.marquee-item{
  width: 230px;
  height: 230px;
  display: block;
  margin:10px;
  transition: all .2s ease-out;
  background:#00cc00;
}
@keyframes marqueeTop{
  0% {
    top: 0;
  }
  100% {
    top: -100%;
  }
}
@keyframes marqueeBottom{
  0% {
    top: -100%;
  }
  100% {
   top: 0;
  }
}
