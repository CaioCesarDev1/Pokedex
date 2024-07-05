import React from "react";
import useWeaknessCalculator from "../../hooks/useWeaknessCalculator";
import Type from "../Type";

const Weakness = ({ types }) => {
    const damageRelations = useWeaknessCalculator(types);
    const doubleDamgeTypes = Object.entries(damageRelations).filter(([_, multiplier]) => multiplier).filter(([type, value]) => value === 2 || value ===4).map(([type, value]) => type)
    console.log(doubleDamgeTypes)

    return (
        <div className="w-full flex flex-row justify-start gap-4 flex-wrap">
            {doubleDamgeTypes.map((types, key) => (
                <Type key={key} type={types} />
            ))}
        </div>
    )
}

export default Weakness