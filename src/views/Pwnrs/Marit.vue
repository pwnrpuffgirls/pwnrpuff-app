<template>
  <div>
    <h1>Marit</h1>
    <p class="under-construction">
      Her er det mye som må gjøres før jeg kaller det ferdig, ja.. Det blir kult!
      Mens dere venter kan dere lese disse triste tankene jeg fikk etter noen
      intervjuer jeg har hatt som kvinne i tech-bransjen.
    </p>
    <p>
      Etter et par intervjuer som tech kvinne, har jeg opparbeidet meg noen
      tanker:
    </p>
    <p class="quote">
      "<b>Det verste med å være kvinne i tech, er å bli spurt om hvordan det er å
      være kvinne i tech."</b><br> Da er det jo implisitt forskjellen fra hvordan det er
      å være mann, eller opplevelser som kvinner i tech opplever det blir
      spurt om. Forskjeller er som regel ikke kule. Hvorfor ikke spørre om hvordan
      det er å jobbe i tech-bransjen?
      Spørre om alle de kule tech-tingene? Slik dere spør kompisene mine. Tenk
      på det.
    </p>
    <p class="quote">
      Hvorfor må jeg svare på de vanskelige og negative tingene om forskjeller
      og mangel på mangfold i IT? Mine dårlige og ubehagelig opplevelser? Rett etter at
      kompisen min fikk svare på spørsmål om alle de kule tingene han kan? Jeg
      kan jo mer enn å bare være kvinne. Det er jo derfor jeg er det stedet jeg
      blir intervjuet til å begynne med, fordi jeg gjorde det samme som kompisen
      min.
    </p>
  </div>
</template>

<script>
export default {
  name: "Marit",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h1 {
  max-width: 400px;
  margin: auto;
}
.under-construction {
  color: cadetblue;
}
p {
  max-width: 400px;
  margin: auto;
  margin-bottom: 25px;
}
a {
  color: #42b983;
}
.quote {
  font-style: italic;
}
</style>
