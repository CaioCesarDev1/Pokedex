import { useState, useEffect } from 'react';
import axios from 'axios';

// Hook to fetch and calculate damage relations
const useWeaknessCalculator = (types) => {
  const [damageRelations, setDamageRelations] = useState({});

  

  useEffect(() => {
    const fetchTypeData = async () => {
      try {
        const responses = await Promise.all(
          types.map(type => axios.get(`https://pokeapi.co/api/v2/type/${type}`))
        );
        const typeData = responses.map(response => response.data);

        const damageMap = {};

        typeData.forEach(type => {
          type.damage_relations.double_damage_from.forEach(damageType => {
            if (!damageMap[damageType.name]) {
              damageMap[damageType.name] = 1;
            }
            damageMap[damageType.name] *= 2;
          });

          type.damage_relations.half_damage_from.forEach(damageType => {
            if (!damageMap[damageType.name]) {
              damageMap[damageType.name] = 1;
            }
            damageMap[damageType.name] *= 0.5;
          });

          type.damage_relations.no_damage_from.forEach(damageType => {
            damageMap[damageType.name] = 0;
          });
        });

        setDamageRelations(damageMap);
      } catch (error) {
        console.error("Erro ao buscar dados dos tipos:", error);
      }
    };

    fetchTypeData();
  }, [types]);

  console.log(damageRelations)

  return damageRelations;
};

export default useWeaknessCalculator;