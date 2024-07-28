export const UrlRoutes = {
   access: 'access',
   welcome: 'welcome',
   poke: 'poke',
   home: 'home',
   selectPokemon: 'select',
   secrets: 'secrets',
   fire: 'fire',
   leaf: 'leaf',
   water: 'water',
   secretFire: 'fire',
   secretLeaf: 'leaf',
   secretWater: 'water',
   end: 'the-end'
} as const;

export const UrlRoutesRoot = {
   selectPokemonRoot: `/${UrlRoutes.poke}/select`,
   secretFireRoot: `/${UrlRoutes.poke}/${UrlRoutes.secrets}/${UrlRoutes.fire}`,
   secretLeafRoot: `/${UrlRoutes.poke}/${UrlRoutes.secrets}/${UrlRoutes.leaf}`,
   secretWaterRoot: `/${UrlRoutes.poke}/${UrlRoutes.secrets}/${UrlRoutes.water}`
}