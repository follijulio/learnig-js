class EfeitoStatus {
    constructor(nome, descricao) {
      this.nome = nome;
      this.descricao = descricao;
    }
  }
  
  class HabilidadeEspecial {
    constructor(nome, descricao) {
      this.nome = nome;
      this.descricao = descricao;
    }
  }
  
  class Batalha {
    constructor(personagem, inimigo) {
      this.personagem = personagem;
      this.inimigo = inimigo;
      this.turnoAtual = 1;
    }
  
    realizarAtaque() {
      const danoPersonagem = this.personagem.ataque - this.inimigo.defesa;
      const danoInimigo = this.inimigo.ataque - this.personagem.defesa;
  
      this.inimigo.vida -= danoPersonagem;
      this.personagem.vida -= danoInimigo;
  
      return `Turno ${this.turnoAtual}: ${this.personagem.nome} atacou ${this.inimigo.nome} causando ${danoPersonagem} de dano. ${this.inimigo.nome} atacou ${this.personagem.nome} causando ${danoInimigo} de dano.`;
    }
  
    avancarTurno() {
      this.turnoAtual++;
    }
  
    verificarFimBatalha() {
      if (this.personagem.vida <= 0) {
        return `${this.personagem.nome} foi derrotado! Fim da batalha.`;
      } else if (this.inimigo.vida <= 0) {
        return `${this.inimigo.nome} foi derrotado! ${this.personagem.nome} venceu a batalha.`;
      } else {
        return false;
      }
    }
  }
  
  class Personagem {
    constructor(nome, classe, nivel, vida, ataque, defesa, dinheiro, experiencia, acoes) {
      this.nome = nome;
      this.classe = classe;
      this.nivel = nivel;
      this.vida = vida;
      this.ataque = ataque;
      this.defesa = defesa;
      this.experiencia = experiencia || 0;
      this.itens = [];
      this.magias = [];
      this.questAtual = null;
      this.dinheiro = dinheiro || 0;
      this.habilidadesEspeciais = [];
      this.acoes = acoes || 5;
      this.status = [];
    }
  
    aplicarEfeitoStatus(efeito) {
      this.status.push(efeito);
      return `${this.nome} foi afetado pelo efeito de status: ${efeito.nome}.`;
    }
  
    atacar(alvo) {
      const dano = this.ataque - alvo.defesa;
      alvo.vida -= dano;
      this.acoes--;
      return `${this.nome} atacou ${alvo.nome} causando ${dano} de dano. Ações restantes: ${this.acoes}.`;
    }
  
    ganharExperiencia(pontos) {
      this.experiencia += pontos;
      return `${this.nome} ganhou ${pontos} pontos de experiência. Nível atual: ${this.nivel}.`;
    }
  
    subirNivel() {
      if (this.experiencia >= this.nivel * 100) {
        this.nivel++;
        this.vida += 10;
        this.ataque += 5;
        this.defesa += 3;
        return `${this.nome} subiu para o nível ${this.nivel}!`;
      }
      return '';
    }
  
    usarItem(item) {
      this.acoes--;
      return `${this.nome} usou ${item.nome}. Ações restantes: ${this.acoes}.`;
    }
  
    aprenderMagia(magia) {
      this.magias.push(magia);
      return `${this.nome} aprendeu a magia ${magia.nome}.`;
    }
  
    realizarQuest() {
      if (this.questAtual) {
        const mensagem = `${this.nome} completou a quest: ${this.questAtual.nome}.`;
        this.ganharExperiencia(this.questAtual.recompensaExperiencia);
        this.questAtual = null;
        return mensagem;
      } else {
        return `${this.nome} não tem uma quest ativa no momento.`;
      }
    }
  
    usarHabilidadeEspecial(alvo) {
      if (this.habilidadesEspeciais.length > 0) {
        const habilidade = this.habilidadesEspeciais[Math.floor(Math.random() * this.habilidadesEspeciais.length)];
        this.acoes--;
        return `${this.nome} usou a habilidade especial ${habilidade.nome} em ${alvo.nome}. Ações restantes: ${this.acoes}.`;
      } else {
        return `${this.nome} não possui habilidades especiais no momento.`;
      }
    }
  }
  
  class Monstro {
    constructor(nome, vida, ataque, defesa, nivel, evolucoes) {
      this.nome = nome;
      this.vida = vida;
      this.ataque = ataque;
      this.defesa = defesa;
      this.nivel = nivel || 1;
      this.evolucoes = evolucoes || [];
      this.evolucionou = false;
    }
  
    evoluir() {
      if (!this.evolucionou && this.evolucoes.length > 0) {
        const evolucao = this.evolucoes[Math.floor(Math.random() * this.evolucoes.length)];
        this.nome = evolucao.nome;
        this.vida += evolucao.vida;
        this.ataque += evolucao.ataque;
        this.defesa += evolucao.defesa;
        this.nivel++;
        this.evolucionou = true;
        return `O ${this.nome} evoluiu para o nível ${this.nivel}!`;
      }
      return 'O monstro não pode evoluir mais.';
    }
  }
  
  class HabilidadeEspecial {
    constructor(nome, descricao) {
      this.nome = nome;
      this.descricao = descricao;
    }
  }
  
  class Regiao {
    constructor(nome, descricao, eventosAleatorios) {
      this.nome = nome;
      this.descricao = descricao;
      this.eventosAleatorios = eventosAleatorios;
    }
  
    explorar(personagem) {
      const evento = this.eventosAleatorios[Math.floor(Math.random() * this.eventosAleatorios.length)];
      personagem.acoes--;
      return `Explorando ${this.nome}: ${evento}. Ações restantes: ${personagem.acoes}.`;
    }
  }
  
  class Localizacao {
    constructor(nome, descricao, habitantes) {
      this.nome = nome;
      this.descricao = descricao;
      this.habitantes = habitantes || [];
    }
  
    adicionarHabitante(habitante) {
      this.habitantes.push(habitante);
      return `${habitante.nome} agora reside em ${this.nome}.`;
    }
  
    removerHabitante(habitante) {
      const index = this.habitantes.indexOf(habitante);
      if (index !== -1) {
        this.habitantes.splice(index, 1);
        return `${habitante.nome} não está mais em ${this.nome}.`;
      } else {
        return `${habitante.nome} não foi encontrado em ${this.nome}.`;
      }
    }
  }
  
  const poçãoCura = { nome: "Poção de Cura", tipo: "cura", valor: 30 };
  const magiaFogo = { nome: "Bola de Fogo", dano: 25 };
  
  const questPrincipal = { nome: "Resgate da Princesa", descricao: "Salve a princesa do castelo", recompensaExperiencia: 100 };
  
  const mercado = {
    itensDisponiveis: [poçãoCura],
    comprarItem: function(personagem, item) {
      if (personagem.dinheiro >= item.valor) {
        personagem.itens.push(item);
        personagem.dinheiro -= item.valor;
        personagem.acoes--;
        return `${personagem.nome} comprou ${item.nome}. Ações restantes: ${personagem.acoes}.`;
      } else {
        return `${personagem.nome} não tem dinheiro suficiente para comprar ${item.nome}. Ações restantes: ${personagem.acoes}.`;
      }
    }
  };
  
  const habilidadeInvisibilidade = new HabilidadeEspecial("Invisibilidade", "Torna-se invisível por um curto período.");
  
  const jogador1 = new Personagem("Herói", "Guerreiro", 1, 100, 20, 10, 50, 0, 5);
  jogador1.habilidadesEspeciais.push(habilidadeInvisibilidade);
  
  const jogador2 = new Personagem("Mago", "Mago", 1, 80, 15, 8, 30, 0, 5);
  const grupo = [jogador1, jogador2];
  
  const monstro1 = new Monstro("Monstro 1", 50, 15, 5, 1);
  const monstro2 = new Monstro("Monstro 2", 60, 18, 8, 1);
  
  monstro2.evolucoes.push({ nome: "Monstro Avançado", vida: 20, ataque: 10, defesa: 5 });
  monstro2.evolucoes.push({ nome: "Monstro Final", vida: 50, ataque: 25, defesa: 15 });
  
  const cidadePrincipal = new Localizacao("Cidade Principal", "Uma cidade movimentada cheia de comerciantes e aventureiros.", [jogador1, jogador2]);
  
  function batalha() {
    const batalhaAtual = new Batalha(jogador1, monstro1);
  
    while (true) {
      const resultadoAtaque = batalhaAtual.realizarAtaque();
      console.log(resultadoAtaque);
  
      batalhaAtual.avancarTurno();
  
      const resultadoFimBatalha = batalhaAtual.verificarFimBatalha();
      if (resultadoFimBatalha) {
        console.log(resultadoFimBatalha);
        break;
      }
    }
  }
  
  function explorar() {
    const resultadoExplorar = regiaoFloresta.explorar(jogador1);
    console.log(resultadoExplorar);
  }
  
  function comprar() {
    const resultadoCompra = mercado.comprarItem(jogador1, poçãoCura);
    console.log(resultadoCompra);
  }
  
  function evoluirMonstro() {
    const resultadoEvoluirMonstro = monstro2.evoluir();
    console.log(resultadoEvoluirMonstro);
  }
  
  function interagirComJogador() {
    const interacao = "O jogador te cumprimenta calorosamente.";
    console.log(interacao);
  }
  
  function interagirComCidade() {
    const mensagem = "Você chegou à Cidade Principal. Muitas coisas para fazer aqui!";
    console.log(mensagem);
  
    console.log(mercado.comprarItem(jogador2, poçãoCura));
    console.log(cidadePrincipal.adicionarHabitante(jogador2));
  }
  
  function realizarAcaoAleatoria() {
    const acoesAleatorias = [
      batalha,
      explorar,
      () => console.log("O jogador descansa em uma taverna."),
      evoluirMonstro,
      interagirComJogador,
      interagirComCidade
    ];
  
    const acaoSelecionada = acoesAleatorias[Math.floor(Math.random() * acoesAleatorias.length)];
    acaoSelecionada();
  }
  
  realizarAcaoAleatoria();
  