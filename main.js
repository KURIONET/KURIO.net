function ShowText(text){
  alert(text);
}

function URLOpen(url){
  alert('ゲームあるけどやってく？');
  window.open(url, '_blank')
}

function FixText(){
  document.getElementById("rainbow").innerText = "二十歳おめでとう！";
  document.getElementById("sub_text").innerText = "え？早生まれはまだ二十歳じゃないって？\n"
                                                  + "困った...。";
  document.getElementById("fix_btn").innerText = "直せない...";
}