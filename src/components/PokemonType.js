import React from 'react';
import normalIcon from '../images/Tipo_normal_icono_EP.svg';
import flyingIcon from '../images/Tipo_volador_icono_EP.svg';
import fightingIcon from '../images/Tipo_lucha_icono_EP.svg';
import poisonIcon from '../images/Tipo_veneno_icono_EP.svg';
import groundIcon from '../images/Tipo_tierra_icono_EP.svg';
import rockIcon from '../images/Tipo_roca_icono_EP.svg';
import bugIcon from '../images/Tipo_bicho_icono_EP.svg';
import ghostIcon from '../images/Tipo_fantasma_icono_EP.svg';
import steelIcon from '../images/Tipo_acero_icono_EP.svg';
import fireIcon from '../images/Tipo_fuego_icono_EP.svg';
import waterIcon from '../images/Tipo_agua_icono_EP.svg';
import grassIcon from '../images/Tipo_planta_icono_EP.svg';
import electricIcon from '../images/Tipo_eléctrico_icono_EP.svg';
import dragonIcon from '../images/Tipo_dragón_icono_EP.svg';
import darkIcon from '../images/Tipo_siniestro_icono_EP.svg';
import psychicIcon from '../images/Tipo_psíquico_icono_EP.svg';
import iceIcon from '../images/Tipo_hielo_icono_EP.svg';
import fairyIcon from '../images/Tipo_hada_icono_EP.svg';

const PokemonType = ({ type }) => {
  
  const typeStyles = {
    normal: {
      backgroundColor: '#9fa19f',
      color: '#FFF',
    },
    fighting: {
      backgroundColor: '#ff8000',
      color: '#FFF',
    },
    flying:{
        backgroundColor: '#81b9ef',
        color:'#FFF'
    },
    poison:{
        backgroundColor: '#8f41cb',
        color:'#FFF'
    },
    ground:{
        backgroundColor: '#915121',
        color:'#FFF'
    },
    rock:{
        backgroundColor: '#b0ab82',
        color:'#FFF'
    },
    bug:{
        backgroundColor: '#92a212',
        color:'#FFF'
    },
    ghost:{
        backgroundColor: '#704170',
        color:'#FFF'
    },
    steel:{
        backgroundColor: '#60a1b8',
        color:'#FFF'
    },
    fire:{
        backgroundColor: '#e62829',
        color:'#FFF'
    },
    water:{
        backgroundColor: '#2980ef',
        color:'#FFF'
    },
    grass:{
        backgroundColor: '#3fa129',
        color:'#FFF'
    },
    electric:{
        backgroundColor: '#fac000',
        color:'#FFF'
    },
    psychic:{
        backgroundColor: '#ef4179',
        color:'#FFF'
    },
    ice:{
        backgroundColor: '#3fd8ff',
        color:'#FFF'
    },
    dragon:{
        backgroundColor: '#5061e1',
        color:'#FFF'
    },
    dark:{
        backgroundColor: '#50413f',
        color:'#FFF'
    },
    fairy:{
        backgroundColor: '#ef71ef',
        color:'#FFF'
    },
    unknown:{
        backgroundColor: '#00000',
        color:'#FFF'
    },
    shadow:{
        backgroundColor: '#00000',
        color:'#FFF'
    }
    
  };

  const getTypeIcon = (typeName) => {
    switch (typeName) {
        case 'normal':
          return <>
            <img className="tiposIconos" src={normalIcon} alt="Tipo Normal" />
            <p className='tiposNombre'>Normal</p>
          </>;
        case 'fighting':
          return <>
          <img className="tiposIconos" src={fightingIcon} alt="Tipo Lucha" />
          <p className='tiposNombre'>Lucha</p>
          </>;
        case 'flying':
          return <>
          <img className="tiposIconos" src={flyingIcon} alt="Tipo Volador" />
          <p className='tiposNombre'>Volador</p>
          </>;
        case 'poison':
            return <>
            <img className="tiposIconos" src={poisonIcon} alt="Tipo Veneno" />
            <p className='tiposNombre'>Veneno</p>
            </>;
        case 'ground':
            return <>
            <img className="tiposIconos" src={groundIcon} alt="Tipo Tierra" />
            <p className='tiposNombre'>Tierra</p>
            </>;
        case 'rock':
            return <>
            <img className="tiposIconos" src={rockIcon} alt="Tipo Roca" />
            <p className='tiposNombre'>Roca</p>
            </>;
        case 'bug':
            return <>
            <img className="tiposIconos" src={bugIcon} alt="Tipo Bicho" />
            <p className='tiposNombre'>Bicho</p>
            </>;
        case 'ghost':
            return <>
            <img className="tiposIconos" src={ghostIcon} alt="Tipo Fantasma" />
            <p className='tiposNombre'>Fantasma</p>
            </>;
        case 'steel':
            return <>
            <img className="tiposIconos" src={steelIcon} alt="Tipo Acero" />
            <p className='tiposNombre'>Acero</p>
            </>;
        case 'fire':
            return <>
            <img className="tiposIconos" src={fireIcon} alt="Tipo Fuego" />
            <p className='tiposNombre'>Fuego</p>
            </>;
        case 'water':
            return <>
            <img className="tiposIconos" src={waterIcon} alt="Tipo Agua" />
            <p className='tiposNombre'>Agua</p>
            </>;
        case 'grass':
            return <>
            <img className="tiposIconos" src={grassIcon} alt="Tipo Planta" />
            <p className='tiposNombre'>Planta</p>
            </>;
        case 'electric':
            return <>
            <img className="tiposIconos" src={electricIcon} alt="Tipo Eléctrico" />
            <p className='tiposNombre'>Eléctrico</p>
            </>;
        case 'psychic':
            return <>
            <img className="tiposIconos" src={psychicIcon} alt="Tipo Psíquico" />
            <p className='tiposNombre'>Psíquico</p>
            </>;
        case 'ice':
            return <>
            <img className="tiposIconos" src={iceIcon} alt="Tipo Hielo" />
            <p className='tiposNombre'>Hielo</p>
            </>;
        case 'dragon':
            return <><img className="tiposIconos" src={dragonIcon} alt="Tipo Dragón" />
            <p className='tiposNombre'>Dragón</p></>;
        case 'dark':
            return <>
            <img className="tiposIconos" src={darkIcon} alt="Tipo Siniestro" />
            <p className='tiposNombre'>Siniestro</p>
            </>;
        case 'fairy':
            return <>
            <img className="tiposIconos" src={fairyIcon} alt="Tipo Hada" />
            <p className='tiposNombre'>Hada</p>
            </>;
        /* case 'unknown':
            return <img className="tiposIconos" src={nullIcon} alt="Tipo Desconocido" />;
        case 'shadow':
            return <img className="tiposIconos" src={shadowIcon} alt="Tipo Sombra" />; */
        default:
          return null;
      }
  }

  return (
    <section className='tipos' style={{ ...typeStyles[type.toLowerCase()] }}>
      {getTypeIcon(type)}
      
    </section>
  );
};

export default PokemonType;