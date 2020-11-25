<html>
    <body>
      <p>Đóng mở link liên hết</p>
      <script language="javascript">
        
        var windowChild = null;
        
        function openWindow()
        {
            windowChild = window.open('https://freetuts.net', "windowChild", "width=500, height=500");
          return false;
        }
         function resizeWindow()
        {
            windowChild.resizeTo(1000, 1000);
            windowChild.focus();
            return false;
        }
        function closeWindow()
        {
            windowChild.close()
          return false;
        }
     
      </script>
      <button href="#" onclick="return openWindow()">Open</button>
      <button href="#" onclick="return resizeWindow()">Resize</button>
      <button href="#" onclick="return closeWindow()">Close</button>
    </body>
</html>