import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean
    accion: ( numeroTexto: string ) => void;
}

export const BotonCalc = ( { texto, color= '#2D2D2D', ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => accion( texto ) }
            activeOpacity={ 0.7 }
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: ( ancho ) ? 160 : 70
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: ( color === '#9B9B9B' ) ? 'black' : 'white'
                }}>{ texto }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        height: 70,
        width: 70,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    gris: {
        backgroundColor: '#9B9B9B',
        color: 'black',
    },
    naranja: {
        backgroundColor: '#FF9427',
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    },
});