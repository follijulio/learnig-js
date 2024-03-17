function main() {
    const kills = [1, 1, 6, 1, 1];
    const matches = parseInt(kills.length);
    let total = 0;
  
    for (let i = 0; i < kills.length; i++) {
      total = total + kills[i];
    }
  
    const media = total / matches;
    console.log(media);
  }
  
  main();
  