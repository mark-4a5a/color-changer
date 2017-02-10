  function setColor(color) {
    document.querySelectorAll("div.field1, div.field2, div.field3").style.backgroundColor = color; 
  }

  function setHeight(height) {
    document.querySelectorAll("div.field1, div.field2, div.field3").style.height = height + "px";
  }
  function setWidth(wide) {
    document.querySelectorAll("div.field1, div.field2, div.field3").style.width = wide + "px";
  }

  function changeField() {
    var wide = document.getElementById('wide').value;
    var height = document.getElementById('height').value;
    var color = document.getElementById('color').value;

    setColor(color);
    setWidth(wide);
    setHeight(height);
  }
