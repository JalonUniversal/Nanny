# Nanny
Nanny is a very simple plugin for operating localstorage easily

## init a entity with using a new operate symbol
var entity1 = new nanny('superman');
var entity2 = new nanny('walkman');

## to set a unique value for each entity
entity1.set('Fly in the sky');
entity2.set('Lisiten music');

## get the value
entity1.get();      // Fly in the sky
entity2.get();      // Lisiten music
