import React from "react";
import {
    Image,
    Text,
    StyleSheet,
    Dimensions,
    View
} from "react-native"
import topo from "../../assets/cesta.png"
import logo from "../../assets/favicon.png"
import Texto from "../components/Texto"

const width = Dimensions.get('screen').width;

export default function Tela(){
    return(
    <>
            <Image source={topo} style={estilos.topo}/>
            <Texto style={estilos.titulo}>
                Detalhes da Cesta
            </Texto>

            <View style={estilos.cesta}>
                <Texto style={estilos.nome}>Cesta de Verduras</Texto>
                <View style={estilos.fazenda}>
                    <Image source={logo} style={estilos.imagemFazenda} />
                    <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
                </View>
                
                <Texto style={estilos.descricao}>Uma cesta com produtos selecionados 
                            cuidadosamente da fazenda direto
                            para sua cozinha
                </Texto>
                <Texto style={estilos.preco}>
                    R$: 40,00
                </Texto>
                    
            </View>
    </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        color: "red",
        fontSize: 24,
        lineHeight: 16,
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    fazenda: {
        paddingVertical: 12,
        flexDirection: "row",
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 26,
        marginTop: 8
    }
})