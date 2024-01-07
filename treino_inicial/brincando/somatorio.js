const videos = [39.16, 25.31, 24.26, 28.05, 28.54, 27.30, 29.20, 20.06, 19.57, 33.09, 26.24, 20.59, 14.43, 17.38, 22.48, 10.57, 18.56, 12.47, 16.44, 15.43];

function soma(videos) {
  let total = 0;
  for (let i = 0; i < videos.length; i++) {
    total += videos[i];
  }
  return total;
}

function main() {
    var valor = soma(videos)
    valor = valor / 60
  console.log(`A soma de todos os vídeos é: ${valor} minutos.`);
}

main()