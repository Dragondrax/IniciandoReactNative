import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from "react-native";

export default function Texto({children, style}){
    const [estilo, setEstilo] = useState(estilos.texto)

    useEffect(() =>{
        if(style?.fontWeight == "bold")
        {
            setEstilo(estilos.textoNegrito)
        }
    }, [style?.fontWeight])


    return(
        <Text style={[style, estilo]}>
            {children}
        </Text>
    );
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})