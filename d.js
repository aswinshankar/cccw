
$(".menu-activator").on("click", function() {
  $("body").toggleClass("menu-active");
});
<html>
<head>
  <title>CCC</title>
  <link rel="stylesheet" href="styles.css"
<body>
<div class="nav">
  <a href="#" class="menu-activator"><i class="ion-ios-more"></i></a>
  <i class="ion-cube"></i>
  <a href="#" class="white link"><i class="ion-ios-redo-outline"></i><i class="ion-ios-redo hidden"></i></a>
</div>
<div class="container">
  <div class="inner">
    <div class="panel panel-left">
      <div class="panel-content">
        <div class="image-background">
        </div>
      </div>
    </div>
    <div class="panel panel-right">
      <div class="panel-content">
        <div class="form">
          <h1>Leave a comment</h1>
          <div class="group">
            <input type="text" required>
            <span class="highlight"></span>
            <label>Your name</label>
          </div>
          <div class="group">
            <input type="text" required>
            <span class="highlight"></span>
            <label>Your email</label>
          </div>
          <a class="send-btn">Send</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="menu"></div>
</body>
</html>
