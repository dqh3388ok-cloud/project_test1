(function(){
  const canvas = document.getElementById('avatar');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const palette = {
    '0': null,        // transparent
    '1': '#2a5f9e',   // blue face (AI/tech)
    '2': '#1a3a5e',   // dark blue shadow
    '3': '#ffffff',   // eye white
    '4': '#ff6b6b',   // eye red/accent
    '5': '#0f1a2e',   // dark outline
    '6': '#66ccff',   // cyan accent (digital)
    '7': '#4a7fbc'    // medium blue
  };

  const data = [
    "0000000000000000",
    "0000055555500000",
    "0000511111150000",
    "0005117771117500",
    "0051176664671150",
    "0511766664667150",
    "0511766664667150",
    "0517764443476150",
    "0517634334376150",
    "0517764443476150",
    "0511766664667150",
    "0051176661171150",
    "0005111111150000",
    "0000511111500000",
    "0000055555500000",
    "0000000000000000"
  ];

  const w = canvas.width;
  const h = canvas.height;
  for(let y=0;y<h;y++){
    const row = data[y] || "0000000000000000";
    for(let x=0;x<w;x++){
      const key = row[x] || '0';
      const col = palette[key];
      if(!col) continue;
      ctx.fillStyle = col;
      ctx.fillRect(x, y, 1, 1);
    }
  }
})();
