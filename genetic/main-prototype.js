'use strict'

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function findDiff(str1, str2) {
  let diff = "";
  str2.split('').forEach(function(val, i) {
    if (val != str1.charAt(i)) diff += val;
  });
  return diff.length;
}

function randomString(length = 1) {
  const charsArray = "abcdefghijklmnopqrstuvwxyz ".split('');
  return Array.from({ length }, () => {
    return charsArray[Math.floor(Math.random() * charsArray.length)]
  }).join('');
}

function mutation (str) {
  return str.replaceAt(Math.floor(Math.random() * str.length), randomString())
}

function run (input, maxGeneration = 2000) {
  let population = [{
    dnk: randomString(input.length),
    generation: 1,
    potomki: []
  }];
  const maxPotomkov = 100;
  const maxSurvivors = 10;
  console.time('Done after')
  for (let i = 0; i < maxGeneration; i++) {
    for (const organism of population) {
      for (let j = 0; j < maxPotomkov; j++) {
        organism.potomki.push({
          dnk: mutation(organism.dnk),
          generation: i,
          potomki: []
        });
      }
    }
    const survivors = population.reduce((newPopulation, organism) => {
      newPopulation = newPopulation.concat(
        newPopulation,
        organism.potomki.map((org) => {
          return [findDiff(input, org.dnk), org]
        })
      )
      return newPopulation
    }, []).sort((a, b) => {
      return a[0] - b[0];
    }).map((org) => {
      return org[1];
    }).slice(0, maxSurvivors);
    population = survivors;

    if (population[0].dnk === input) {
      console.log('population', population[0]);
      break;
    }
    // console.log('population[0].dnk', population[0].dnk)
  }
  console.timeEnd('Done after')
  if (population[0].dnk !== input) {
    console.log('Out of max generation');
  }
}

run("the quick brown fox jumps over the lazy dog");

// console.log(mutation("hello"));
