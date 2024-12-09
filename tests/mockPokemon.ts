import { Pokemon } from "../models/pokemon";

export const mockPokemon: Pokemon = {
  abilities: [
    {
      ability: {
        name: "limber",
        url: "https://pokeapi.co/api/v2/ability/7/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "imposter",
        url: "https://pokeapi.co/api/v2/ability/150/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 101,
  cries: {
    latest:
      "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg",
    legacy:
      "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/132.ogg",
  },
  forms: [
    {
      name: "ditto",
      url: "https://pokeapi.co/api/v2/pokemon-form/132/",
    },
  ],
  game_indices: [
    {
      game_index: 76,
      version: {
        name: "red",
        url: "https://pokeapi.co/api/v2/version/1/",
      },
    },
    {
      game_index: 76,
      version: {
        name: "blue",
        url: "https://pokeapi.co/api/v2/version/2/",
      },
    },
    {
      game_index: 76,
      version: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version/3/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "gold",
        url: "https://pokeapi.co/api/v2/version/4/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "silver",
        url: "https://pokeapi.co/api/v2/version/5/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version/6/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "ruby",
        url: "https://pokeapi.co/api/v2/version/7/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "sapphire",
        url: "https://pokeapi.co/api/v2/version/8/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version/9/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "firered",
        url: "https://pokeapi.co/api/v2/version/10/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "leafgreen",
        url: "https://pokeapi.co/api/v2/version/11/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "diamond",
        url: "https://pokeapi.co/api/v2/version/12/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "pearl",
        url: "https://pokeapi.co/api/v2/version/13/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version/14/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "heartgold",
        url: "https://pokeapi.co/api/v2/version/15/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "soulsilver",
        url: "https://pokeapi.co/api/v2/version/16/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "black",
        url: "https://pokeapi.co/api/v2/version/17/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "white",
        url: "https://pokeapi.co/api/v2/version/18/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "black-2",
        url: "https://pokeapi.co/api/v2/version/21/",
      },
    },
    {
      game_index: 132,
      version: {
        name: "white-2",
        url: "https://pokeapi.co/api/v2/version/22/",
      },
    },
  ],
  height: 3,
  held_items: [
    {
      item: {
        name: "metal-powder",
        url: "https://pokeapi.co/api/v2/item/234/",
      },
      version_details: [
        {
          rarity: 5,
          version: {
            name: "ruby",
            url: "https://pokeapi.co/api/v2/version/7/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "sapphire",
            url: "https://pokeapi.co/api/v2/version/8/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version/9/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "firered",
            url: "https://pokeapi.co/api/v2/version/10/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "leafgreen",
            url: "https://pokeapi.co/api/v2/version/11/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "diamond",
            url: "https://pokeapi.co/api/v2/version/12/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "pearl",
            url: "https://pokeapi.co/api/v2/version/13/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version/14/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "heartgold",
            url: "https://pokeapi.co/api/v2/version/15/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "soulsilver",
            url: "https://pokeapi.co/api/v2/version/16/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "black-2",
            url: "https://pokeapi.co/api/v2/version/21/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "white-2",
            url: "https://pokeapi.co/api/v2/version/22/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
      ],
    },
    {
      item: {
        name: "quick-powder",
        url: "https://pokeapi.co/api/v2/item/251/",
      },
      version_details: [
        {
          rarity: 50,
          version: {
            name: "diamond",
            url: "https://pokeapi.co/api/v2/version/12/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "pearl",
            url: "https://pokeapi.co/api/v2/version/13/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version/14/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "heartgold",
            url: "https://pokeapi.co/api/v2/version/15/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "soulsilver",
            url: "https://pokeapi.co/api/v2/version/16/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "black-2",
            url: "https://pokeapi.co/api/v2/version/21/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "white-2",
            url: "https://pokeapi.co/api/v2/version/22/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "x",
            url: "https://pokeapi.co/api/v2/version/23/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "y",
            url: "https://pokeapi.co/api/v2/version/24/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
      ],
    },
  ],
  id: 132,
  is_default: true,
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/132/encounters",
  moves: [
    {
      move: {
        name: "transform",
        url: "https://pokeapi.co/api/v2/move/144/",
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "scarlet-violet",
            url: "https://pokeapi.co/api/v2/version-group/25/",
          },
        },
      ],
    },
  ],
  name: "ditto",
  order: 214,
  past_abilities: [],
  past_types: [],
  species: {
    name: "ditto",
    url: "https://pokeapi.co/api/v2/pokemon-species/132/",
  },
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    back_female: "",
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
    back_shiny_female: "",
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    front_female: "",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
    front_shiny_female: "",
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
        front_female: "",
      },
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
        front_female: "",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
        front_shiny_female: "",
      },
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/132.png",
      },
      showdown: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/132.gif",
        back_female: "",
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/132.gif",
        back_shiny_female: "",
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/132.gif",
        front_female: "",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/132.gif",
        front_shiny_female: "",
      },
    },
    versions: {
      "generation-i": {
        "red-blue": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/132.png",
          back_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/132.png",
          back_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/132.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png",
          front_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/132.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/132.png",
        },
        yellow: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/132.png",
          back_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/132.png",
          back_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/132.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/132.png",
          front_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/132.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/132.png",
        },
      },
      "generation-ii": {
        crystal: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/132.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/132.png",
          back_shiny_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/132.png",
          back_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/132.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/132.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/132.png",
          front_shiny_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/132.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png",
        },
        gold: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/132.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/132.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/132.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/132.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/132.png",
        },
        silver: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/132.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/132.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/132.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/132.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/132.png",
        },
      },
      "generation-iii": {
        emerald: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/132.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/132.png",
        },
        "firered-leafgreen": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/132.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/132.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/132.png",
        },
        "ruby-sapphire": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/132.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/132.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/132.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/132.png",
        },
      },
      "generation-iv": {
        "diamond-pearl": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/132.png",
          back_female: "",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/132.png",
          back_shiny_female: "",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/132.png",
          front_female: "",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/132.png",
          front_shiny_female: "",
        },
        "heartgold-soulsilver": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/132.png",
          back_female: "",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/132.png",
          back_shiny_female: "",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/132.png",
          front_female: "",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/132.png",
          front_shiny_female: "",
        },
        platinum: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/132.png",
          back_female: "",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/132.png",
          back_shiny_female: "",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/132.png",
          front_female: "",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png",
          front_shiny_female: "",
        },
      },
      "generation-v": {
        "black-white": {
          animated: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif",
            back_female: "",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/132.gif",
            back_shiny_female: "",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
            front_female: "",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif",
            front_shiny_female: "",
          },
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/132.png",
          back_female: "",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/132.png",
          back_shiny_female: "",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/132.png",
          front_female: "",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/132.png",
          front_shiny_female: "",
        },
      },
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/132.png",
          front_female: "",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/132.png",
          front_shiny_female: "",
        },
        "x-y": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/132.png",
          front_female: "",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/132.png",
          front_shiny_female: "",
        },
      },
      "generation-vii": {
        icons: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png",
          front_female: "",
        },
        "ultra-sun-ultra-moon": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/132.png",
          front_female: "",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/132.png",
          front_shiny_female: "",
        },
      },
      "generation-viii": {
        icons: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/132.png",
          front_female: "",
        },
      },
    },
  },
  stats: [
    {
      base_stat: 48,
      effort: 1,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/",
      },
    },
  ],
  weight: 40,
};

export const mockPokemonList = {
  count: 1302,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: "",
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
    {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
    },
    {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon/9/",
    },
    {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon/10/",
    },
    {
      name: "metapod",
      url: "https://pokeapi.co/api/v2/pokemon/11/",
    },
    {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon/12/",
    },
    {
      name: "weedle",
      url: "https://pokeapi.co/api/v2/pokemon/13/",
    },
    {
      name: "kakuna",
      url: "https://pokeapi.co/api/v2/pokemon/14/",
    },
    {
      name: "beedrill",
      url: "https://pokeapi.co/api/v2/pokemon/15/",
    },
    {
      name: "pidgey",
      url: "https://pokeapi.co/api/v2/pokemon/16/",
    },
    {
      name: "pidgeotto",
      url: "https://pokeapi.co/api/v2/pokemon/17/",
    },
    {
      name: "pidgeot",
      url: "https://pokeapi.co/api/v2/pokemon/18/",
    },
    {
      name: "rattata",
      url: "https://pokeapi.co/api/v2/pokemon/19/",
    },
    {
      name: "raticate",
      url: "https://pokeapi.co/api/v2/pokemon/20/",
    },
    {
      name: "spearow",
      url: "https://pokeapi.co/api/v2/pokemon/21/",
    },
    {
      name: "fearow",
      url: "https://pokeapi.co/api/v2/pokemon/22/",
    },
    {
      name: "ekans",
      url: "https://pokeapi.co/api/v2/pokemon/23/",
    },
    {
      name: "arbok",
      url: "https://pokeapi.co/api/v2/pokemon/24/",
    },
    {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/pokemon/25/",
    },
    {
      name: "raichu",
      url: "https://pokeapi.co/api/v2/pokemon/26/",
    },
    {
      name: "sandshrew",
      url: "https://pokeapi.co/api/v2/pokemon/27/",
    },
    {
      name: "sandslash",
      url: "https://pokeapi.co/api/v2/pokemon/28/",
    },
    {
      name: "nidoran-f",
      url: "https://pokeapi.co/api/v2/pokemon/29/",
    },
    {
      name: "nidorina",
      url: "https://pokeapi.co/api/v2/pokemon/30/",
    },
    {
      name: "nidoqueen",
      url: "https://pokeapi.co/api/v2/pokemon/31/",
    },
    {
      name: "nidoran-m",
      url: "https://pokeapi.co/api/v2/pokemon/32/",
    },
    {
      name: "nidorino",
      url: "https://pokeapi.co/api/v2/pokemon/33/",
    },
    {
      name: "nidoking",
      url: "https://pokeapi.co/api/v2/pokemon/34/",
    },
    {
      name: "clefairy",
      url: "https://pokeapi.co/api/v2/pokemon/35/",
    },
    {
      name: "clefable",
      url: "https://pokeapi.co/api/v2/pokemon/36/",
    },
    {
      name: "vulpix",
      url: "https://pokeapi.co/api/v2/pokemon/37/",
    },
    {
      name: "ninetales",
      url: "https://pokeapi.co/api/v2/pokemon/38/",
    },
    {
      name: "jigglypuff",
      url: "https://pokeapi.co/api/v2/pokemon/39/",
    },
    {
      name: "wigglytuff",
      url: "https://pokeapi.co/api/v2/pokemon/40/",
    },
    {
      name: "zubat",
      url: "https://pokeapi.co/api/v2/pokemon/41/",
    },
    {
      name: "golbat",
      url: "https://pokeapi.co/api/v2/pokemon/42/",
    },
    {
      name: "oddish",
      url: "https://pokeapi.co/api/v2/pokemon/43/",
    },
    {
      name: "gloom",
      url: "https://pokeapi.co/api/v2/pokemon/44/",
    },
    {
      name: "vileplume",
      url: "https://pokeapi.co/api/v2/pokemon/45/",
    },
    {
      name: "paras",
      url: "https://pokeapi.co/api/v2/pokemon/46/",
    },
    {
      name: "parasect",
      url: "https://pokeapi.co/api/v2/pokemon/47/",
    },
    {
      name: "venonat",
      url: "https://pokeapi.co/api/v2/pokemon/48/",
    },
    {
      name: "venomoth",
      url: "https://pokeapi.co/api/v2/pokemon/49/",
    },
    {
      name: "diglett",
      url: "https://pokeapi.co/api/v2/pokemon/50/",
    },
    {
      name: "dugtrio",
      url: "https://pokeapi.co/api/v2/pokemon/51/",
    },
    {
      name: "meowth",
      url: "https://pokeapi.co/api/v2/pokemon/52/",
    },
    {
      name: "persian",
      url: "https://pokeapi.co/api/v2/pokemon/53/",
    },
    {
      name: "psyduck",
      url: "https://pokeapi.co/api/v2/pokemon/54/",
    },
    {
      name: "golduck",
      url: "https://pokeapi.co/api/v2/pokemon/55/",
    },
    {
      name: "mankey",
      url: "https://pokeapi.co/api/v2/pokemon/56/",
    },
    {
      name: "primeape",
      url: "https://pokeapi.co/api/v2/pokemon/57/",
    },
    {
      name: "growlithe",
      url: "https://pokeapi.co/api/v2/pokemon/58/",
    },
    {
      name: "arcanine",
      url: "https://pokeapi.co/api/v2/pokemon/59/",
    },
    {
      name: "poliwag",
      url: "https://pokeapi.co/api/v2/pokemon/60/",
    },
    {
      name: "poliwhirl",
      url: "https://pokeapi.co/api/v2/pokemon/61/",
    },
    {
      name: "poliwrath",
      url: "https://pokeapi.co/api/v2/pokemon/62/",
    },
    {
      name: "abra",
      url: "https://pokeapi.co/api/v2/pokemon/63/",
    },
    {
      name: "kadabra",
      url: "https://pokeapi.co/api/v2/pokemon/64/",
    },
    {
      name: "alakazam",
      url: "https://pokeapi.co/api/v2/pokemon/65/",
    },
    {
      name: "machop",
      url: "https://pokeapi.co/api/v2/pokemon/66/",
    },
    {
      name: "machoke",
      url: "https://pokeapi.co/api/v2/pokemon/67/",
    },
    {
      name: "machamp",
      url: "https://pokeapi.co/api/v2/pokemon/68/",
    },
    {
      name: "bellsprout",
      url: "https://pokeapi.co/api/v2/pokemon/69/",
    },
    {
      name: "weepinbell",
      url: "https://pokeapi.co/api/v2/pokemon/70/",
    },
    {
      name: "victreebel",
      url: "https://pokeapi.co/api/v2/pokemon/71/",
    },
    {
      name: "tentacool",
      url: "https://pokeapi.co/api/v2/pokemon/72/",
    },
    {
      name: "tentacruel",
      url: "https://pokeapi.co/api/v2/pokemon/73/",
    },
    {
      name: "geodude",
      url: "https://pokeapi.co/api/v2/pokemon/74/",
    },
    {
      name: "graveler",
      url: "https://pokeapi.co/api/v2/pokemon/75/",
    },
    {
      name: "golem",
      url: "https://pokeapi.co/api/v2/pokemon/76/",
    },
    {
      name: "ponyta",
      url: "https://pokeapi.co/api/v2/pokemon/77/",
    },
    {
      name: "rapidash",
      url: "https://pokeapi.co/api/v2/pokemon/78/",
    },
    {
      name: "slowpoke",
      url: "https://pokeapi.co/api/v2/pokemon/79/",
    },
    {
      name: "slowbro",
      url: "https://pokeapi.co/api/v2/pokemon/80/",
    },
    {
      name: "magnemite",
      url: "https://pokeapi.co/api/v2/pokemon/81/",
    },
    {
      name: "magneton",
      url: "https://pokeapi.co/api/v2/pokemon/82/",
    },
    {
      name: "farfetchd",
      url: "https://pokeapi.co/api/v2/pokemon/83/",
    },
    {
      name: "doduo",
      url: "https://pokeapi.co/api/v2/pokemon/84/",
    },
    {
      name: "dodrio",
      url: "https://pokeapi.co/api/v2/pokemon/85/",
    },
    {
      name: "seel",
      url: "https://pokeapi.co/api/v2/pokemon/86/",
    },
    {
      name: "dewgong",
      url: "https://pokeapi.co/api/v2/pokemon/87/",
    },
    {
      name: "grimer",
      url: "https://pokeapi.co/api/v2/pokemon/88/",
    },
    {
      name: "muk",
      url: "https://pokeapi.co/api/v2/pokemon/89/",
    },
    {
      name: "shellder",
      url: "https://pokeapi.co/api/v2/pokemon/90/",
    },
    {
      name: "cloyster",
      url: "https://pokeapi.co/api/v2/pokemon/91/",
    },
    {
      name: "gastly",
      url: "https://pokeapi.co/api/v2/pokemon/92/",
    },
    {
      name: "haunter",
      url: "https://pokeapi.co/api/v2/pokemon/93/",
    },
    {
      name: "gengar",
      url: "https://pokeapi.co/api/v2/pokemon/94/",
    },
    {
      name: "onix",
      url: "https://pokeapi.co/api/v2/pokemon/95/",
    },
    {
      name: "drowzee",
      url: "https://pokeapi.co/api/v2/pokemon/96/",
    },
    {
      name: "hypno",
      url: "https://pokeapi.co/api/v2/pokemon/97/",
    },
    {
      name: "krabby",
      url: "https://pokeapi.co/api/v2/pokemon/98/",
    },
    {
      name: "kingler",
      url: "https://pokeapi.co/api/v2/pokemon/99/",
    },
    {
      name: "voltorb",
      url: "https://pokeapi.co/api/v2/pokemon/100/",
    },
    {
      name: "electrode",
      url: "https://pokeapi.co/api/v2/pokemon/101/",
    },
    {
      name: "exeggcute",
      url: "https://pokeapi.co/api/v2/pokemon/102/",
    },
    {
      name: "exeggutor",
      url: "https://pokeapi.co/api/v2/pokemon/103/",
    },
    {
      name: "cubone",
      url: "https://pokeapi.co/api/v2/pokemon/104/",
    },
    {
      name: "marowak",
      url: "https://pokeapi.co/api/v2/pokemon/105/",
    },
    {
      name: "hitmonlee",
      url: "https://pokeapi.co/api/v2/pokemon/106/",
    },
    {
      name: "hitmonchan",
      url: "https://pokeapi.co/api/v2/pokemon/107/",
    },
    {
      name: "lickitung",
      url: "https://pokeapi.co/api/v2/pokemon/108/",
    },
    {
      name: "koffing",
      url: "https://pokeapi.co/api/v2/pokemon/109/",
    },
    {
      name: "weezing",
      url: "https://pokeapi.co/api/v2/pokemon/110/",
    },
    {
      name: "rhyhorn",
      url: "https://pokeapi.co/api/v2/pokemon/111/",
    },
    {
      name: "rhydon",
      url: "https://pokeapi.co/api/v2/pokemon/112/",
    },
    {
      name: "chansey",
      url: "https://pokeapi.co/api/v2/pokemon/113/",
    },
    {
      name: "tangela",
      url: "https://pokeapi.co/api/v2/pokemon/114/",
    },
    {
      name: "kangaskhan",
      url: "https://pokeapi.co/api/v2/pokemon/115/",
    },
    {
      name: "horsea",
      url: "https://pokeapi.co/api/v2/pokemon/116/",
    },
    {
      name: "seadra",
      url: "https://pokeapi.co/api/v2/pokemon/117/",
    },
    {
      name: "goldeen",
      url: "https://pokeapi.co/api/v2/pokemon/118/",
    },
    {
      name: "seaking",
      url: "https://pokeapi.co/api/v2/pokemon/119/",
    },
    {
      name: "staryu",
      url: "https://pokeapi.co/api/v2/pokemon/120/",
    },
    {
      name: "starmie",
      url: "https://pokeapi.co/api/v2/pokemon/121/",
    },
    {
      name: "mr-mime",
      url: "https://pokeapi.co/api/v2/pokemon/122/",
    },
    {
      name: "scyther",
      url: "https://pokeapi.co/api/v2/pokemon/123/",
    },
    {
      name: "jynx",
      url: "https://pokeapi.co/api/v2/pokemon/124/",
    },
    {
      name: "electabuzz",
      url: "https://pokeapi.co/api/v2/pokemon/125/",
    },
    {
      name: "magmar",
      url: "https://pokeapi.co/api/v2/pokemon/126/",
    },
    {
      name: "pinsir",
      url: "https://pokeapi.co/api/v2/pokemon/127/",
    },
    {
      name: "tauros",
      url: "https://pokeapi.co/api/v2/pokemon/128/",
    },
    {
      name: "magikarp",
      url: "https://pokeapi.co/api/v2/pokemon/129/",
    },
    {
      name: "gyarados",
      url: "https://pokeapi.co/api/v2/pokemon/130/",
    },
    {
      name: "lapras",
      url: "https://pokeapi.co/api/v2/pokemon/131/",
    },
    {
      name: "ditto",
      url: "https://pokeapi.co/api/v2/pokemon/132/",
    },
    {
      name: "eevee",
      url: "https://pokeapi.co/api/v2/pokemon/133/",
    },
    {
      name: "vaporeon",
      url: "https://pokeapi.co/api/v2/pokemon/134/",
    },
    {
      name: "jolteon",
      url: "https://pokeapi.co/api/v2/pokemon/135/",
    },
    {
      name: "flareon",
      url: "https://pokeapi.co/api/v2/pokemon/136/",
    },
    {
      name: "porygon",
      url: "https://pokeapi.co/api/v2/pokemon/137/",
    },
    {
      name: "omanyte",
      url: "https://pokeapi.co/api/v2/pokemon/138/",
    },
    {
      name: "omastar",
      url: "https://pokeapi.co/api/v2/pokemon/139/",
    },
    {
      name: "kabuto",
      url: "https://pokeapi.co/api/v2/pokemon/140/",
    },
    {
      name: "kabutops",
      url: "https://pokeapi.co/api/v2/pokemon/141/",
    },
    {
      name: "aerodactyl",
      url: "https://pokeapi.co/api/v2/pokemon/142/",
    },
    {
      name: "snorlax",
      url: "https://pokeapi.co/api/v2/pokemon/143/",
    },
    {
      name: "articuno",
      url: "https://pokeapi.co/api/v2/pokemon/144/",
    },
    {
      name: "zapdos",
      url: "https://pokeapi.co/api/v2/pokemon/145/",
    },
    {
      name: "moltres",
      url: "https://pokeapi.co/api/v2/pokemon/146/",
    },
    {
      name: "dratini",
      url: "https://pokeapi.co/api/v2/pokemon/147/",
    },
    {
      name: "dragonair",
      url: "https://pokeapi.co/api/v2/pokemon/148/",
    },
    {
      name: "dragonite",
      url: "https://pokeapi.co/api/v2/pokemon/149/",
    },
    {
      name: "mewtwo",
      url: "https://pokeapi.co/api/v2/pokemon/150/",
    },
    {
      name: "mew",
      url: "https://pokeapi.co/api/v2/pokemon/151/",
    },
    {
      name: "chikorita",
      url: "https://pokeapi.co/api/v2/pokemon/152/",
    },
    {
      name: "bayleef",
      url: "https://pokeapi.co/api/v2/pokemon/153/",
    },
    {
      name: "meganium",
      url: "https://pokeapi.co/api/v2/pokemon/154/",
    },
    {
      name: "cyndaquil",
      url: "https://pokeapi.co/api/v2/pokemon/155/",
    },
    {
      name: "quilava",
      url: "https://pokeapi.co/api/v2/pokemon/156/",
    },
    {
      name: "typhlosion",
      url: "https://pokeapi.co/api/v2/pokemon/157/",
    },
    {
      name: "totodile",
      url: "https://pokeapi.co/api/v2/pokemon/158/",
    },
    {
      name: "croconaw",
      url: "https://pokeapi.co/api/v2/pokemon/159/",
    },
    {
      name: "feraligatr",
      url: "https://pokeapi.co/api/v2/pokemon/160/",
    },
    {
      name: "sentret",
      url: "https://pokeapi.co/api/v2/pokemon/161/",
    },
    {
      name: "furret",
      url: "https://pokeapi.co/api/v2/pokemon/162/",
    },
    {
      name: "hoothoot",
      url: "https://pokeapi.co/api/v2/pokemon/163/",
    },
    {
      name: "noctowl",
      url: "https://pokeapi.co/api/v2/pokemon/164/",
    },
    {
      name: "ledyba",
      url: "https://pokeapi.co/api/v2/pokemon/165/",
    },
    {
      name: "ledian",
      url: "https://pokeapi.co/api/v2/pokemon/166/",
    },
    {
      name: "spinarak",
      url: "https://pokeapi.co/api/v2/pokemon/167/",
    },
    {
      name: "ariados",
      url: "https://pokeapi.co/api/v2/pokemon/168/",
    },
    {
      name: "crobat",
      url: "https://pokeapi.co/api/v2/pokemon/169/",
    },
    {
      name: "chinchou",
      url: "https://pokeapi.co/api/v2/pokemon/170/",
    },
    {
      name: "lanturn",
      url: "https://pokeapi.co/api/v2/pokemon/171/",
    },
    {
      name: "pichu",
      url: "https://pokeapi.co/api/v2/pokemon/172/",
    },
    {
      name: "cleffa",
      url: "https://pokeapi.co/api/v2/pokemon/173/",
    },
    {
      name: "igglybuff",
      url: "https://pokeapi.co/api/v2/pokemon/174/",
    },
    {
      name: "togepi",
      url: "https://pokeapi.co/api/v2/pokemon/175/",
    },
    {
      name: "togetic",
      url: "https://pokeapi.co/api/v2/pokemon/176/",
    },
    {
      name: "natu",
      url: "https://pokeapi.co/api/v2/pokemon/177/",
    },
    {
      name: "xatu",
      url: "https://pokeapi.co/api/v2/pokemon/178/",
    },
    {
      name: "mareep",
      url: "https://pokeapi.co/api/v2/pokemon/179/",
    },
    {
      name: "flaaffy",
      url: "https://pokeapi.co/api/v2/pokemon/180/",
    },
    {
      name: "ampharos",
      url: "https://pokeapi.co/api/v2/pokemon/181/",
    },
    {
      name: "bellossom",
      url: "https://pokeapi.co/api/v2/pokemon/182/",
    },
    {
      name: "marill",
      url: "https://pokeapi.co/api/v2/pokemon/183/",
    },
    {
      name: "azumarill",
      url: "https://pokeapi.co/api/v2/pokemon/184/",
    },
    {
      name: "sudowoodo",
      url: "https://pokeapi.co/api/v2/pokemon/185/",
    },
    {
      name: "politoed",
      url: "https://pokeapi.co/api/v2/pokemon/186/",
    },
    {
      name: "hoppip",
      url: "https://pokeapi.co/api/v2/pokemon/187/",
    },
    {
      name: "skiploom",
      url: "https://pokeapi.co/api/v2/pokemon/188/",
    },
    {
      name: "jumpluff",
      url: "https://pokeapi.co/api/v2/pokemon/189/",
    },
    {
      name: "aipom",
      url: "https://pokeapi.co/api/v2/pokemon/190/",
    },
    {
      name: "sunkern",
      url: "https://pokeapi.co/api/v2/pokemon/191/",
    },
    {
      name: "sunflora",
      url: "https://pokeapi.co/api/v2/pokemon/192/",
    },
    {
      name: "yanma",
      url: "https://pokeapi.co/api/v2/pokemon/193/",
    },
    {
      name: "wooper",
      url: "https://pokeapi.co/api/v2/pokemon/194/",
    },
    {
      name: "quagsire",
      url: "https://pokeapi.co/api/v2/pokemon/195/",
    },
    {
      name: "espeon",
      url: "https://pokeapi.co/api/v2/pokemon/196/",
    },
    {
      name: "umbreon",
      url: "https://pokeapi.co/api/v2/pokemon/197/",
    },
    {
      name: "murkrow",
      url: "https://pokeapi.co/api/v2/pokemon/198/",
    },
    {
      name: "slowking",
      url: "https://pokeapi.co/api/v2/pokemon/199/",
    },
    {
      name: "misdreavus",
      url: "https://pokeapi.co/api/v2/pokemon/200/",
    },
  ],
};
