"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Info } from "lucide-react"

// ... (Exercise interface and exercises array remain unchanged)

export default function ExercisesPage() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isInstructionsOpen, setIsInstructionsOpen] = useState(false)
    const selectedExercise = exercises[currentIndex]

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % exercises.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + exercises.length) % exercises.length)
    }

    return (
        <div className="container py-10 px-5 md:px-10 xl:px-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className="text-4xl font-bold tracking-tight mb-4">Exercícios</h1>

                <Alert
                    className="block bg-muted/50 border-primary/20 mb-8 cursor-pointer transition-all hover:bg-muted/80"
                    onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
                >
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <Info className="h-4 w-4" />
                            <AlertTitle className="mb-0 line-clamp-none">Como executar</AlertTitle>
                        </div>
                        {isInstructionsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>

                    <motion.div
                        initial={false}
                        animate={{ height: isInstructionsOpen ? "auto" : 0, opacity: isInstructionsOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <AlertDescription className="mt-4">
                            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                                <li>Para executar estes exercícios, você deve criar uma pasta chamada <code>exercicios</code> dentro do seu projeto GO.</li>
                                <li>Coloque o código de cada função dentro dessa pasta (com <code>package exercicios</code>).</li>
                                <li>Em seguida, utilize o arquivo <code>main.go</code> na raiz do projeto para chamar as funções, conforme o exemplo abaixo.</li>
                            </ul>
                        </AlertDescription>
                    </motion.div>
                </Alert>
            </motion.div>

            {/* Mobile Pagination Controls */}
            <div className="flex items-center justify-between mb-6 md:hidden">
                <Button variant="outline" size="icon" onClick={handlePrev}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">
                    Exercício {currentIndex + 1} de {exercises.length}
                </span>
                <Button variant="outline" size="icon" onClick={handleNext}>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                <div className="hidden md:block space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Lista de Exercícios</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ScrollArea className="h-[600px]">
                                <div className="flex flex-col p-2 gap-2">
                                    {exercises.map((exercise, index) => (
                                        <Button
                                            key={exercise.id}
                                            variant={currentIndex === index ? "secondary" : "ghost"}
                                            className="justify-start text-left h-auto py-3 hover:text-primary transition-colors duration-300"
                                            onClick={() => setCurrentIndex(index)}
                                        >
                                            <div className="flex flex-col gap-1 w-full">
                                                <span className="font-medium">{exercise.title}</span>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-muted-foreground truncate w-[150px]">
                                                        {exercise.description}
                                                    </span>
                                                    <Badge variant="outline" className="text-[10px] h-5">
                                                        {exercise.difficulty}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </Button>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>

                <motion.div
                    key={selectedExercise.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className="h-full">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-2xl mb-2">{selectedExercise.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {selectedExercise.description}
                                    </CardDescription>
                                </div>
                                <Badge>{selectedExercise.difficulty}</Badge>
                            </div>
                        </CardHeader>
                        <Separator />
                        <CardContent className="p-6">
                            <div className="rounded-md bg-muted p-4 overflow-x-auto">
                                <pre className="text-sm font-mono">
                                    <code>{selectedExercise.code}</code>
                                </pre>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

interface Exercise {
    id: string
    title: string
    description: string
    code: string
    difficulty: "Fácil" | "Médio" | "Difícil"
}

const exercises: Exercise[] = [
    {
        id: "soma",
        title: "1) Soma Simples",
        description: "Soma de dois números inteiros.",
        difficulty: "Fácil",
        code: `package exercicios

import "fmt"

func Soma(a, b int) {
    fmt.Printf("%d + %d = %d\\n", a, b, a+b)
}`,
    },
    {
        id: "divisao",
        title: "2) Divisão",
        description: "Divisão entre dois números inteiros.",
        difficulty: "Fácil",
        code: `package exercicios

import "fmt"

func Divisao(a, b int) {
    fmt.Printf("%d / %d = %d\\n", a, b, a / b)
}`,
    },
    {
        id: "antecessor-sucessor",
        title: "3) Antecessor e Sucessor",
        description: "Imprimir antecessor e sucessor de um número.",
        difficulty: "Fácil",
        code: `package exercicios

import "fmt"

func AntecessorSucessor(numero int) {
	fmt.Printf("Você digitou: %d | Antecessor: %d | Sucessor: %d\\n", numero, numero-1, numero+1)
}`,
    },
    {
        id: "verificar-numero",
        title: "4) Verificar Número",
        description: "Verificar se um número é par/ímpar e positivo/negativo.",
        difficulty: "Fácil",
        code: `package exercicios

import "fmt"

func VerificarNumero(n int) {
	tipo := ""
	if n%2 == 0 {
		tipo = "Par"
	} else{
		tipo = "Ímpar"
	}

	sinal := ""
	if n > 0 {
		sinal = "Positivo"
	} else if n < 0 {
		sinal = "Negativo"
	} else {
		sinal = "Neutro"
	}

	fmt.Printf("O número %d é %s e %s\\n", n, tipo, sinal)
}`,
    },
    {
        id: "primo",
        title: "5) Número Primo",
        description: "Verificação de número primo.",
        difficulty: "Médio",
        code: `package exercicios

import ("fmt"; "math")

func VerificarPrimo(n int) {
	if n <= 1 {
		fmt.Printf("%d não é primo\\n", n)
		return
	}

	isPrimo := true

	lastNumber := int(math.Sqrt(float64(n)))

	for i := 2; i <= lastNumber; i++ {
		if n%i == 0 {
			isPrimo = false
			break
		}
	}

	if isPrimo {
		fmt.Printf("%d é primo\\n", n)
	} else {
		fmt.Printf("%d não é primo\\n", n)
	}
}`,
    },
    {
        id: "ordenacao-numerica",
        title: "6) Ordenação Numérica",
        description: "Ordenação de uma sequência numérica.",
        difficulty: "Médio",
        code: `package exercicios

import ("fmt"; "sort" )

func OrdenarNumeros(lista []int) {
	fmt.Println("Lista original:", lista)
	
	sort.Ints(lista)
	
	fmt.Println("Lista ordenada:", lista)
}`,
    },
    {
        id: "ordenacao-texto",
        title: "7) Ordenação de Texto",
        description: "Ordenação de caracteres em ordem ascendente.",
        difficulty: "Médio",
        code: `package exercicios

import ("fmt"; "sort"; "strings")

func OrdenarTexto(texto string) {
	letras := strings.Split(texto, "")
	
	sort.Strings(letras)
	
	resultado := strings.Join(letras, "")
	
	fmt.Printf("Original: %s | Ordenado: %s\\n", texto, resultado)
}`,
    },
    {
        id: "valor-endereco",
        title: "9) Valor e Endereço",
        description: "Exibir valor e endereço de memória de uma variável.",
        difficulty: "Fácil",
        code: `package exercicios

import "fmt"

func ImprimirValorEEndereco(n int) {
	fmt.Printf("Digitado: %d | Endereço na Memória: %p\\n", n, &n)
}`,
    },
    {
        id: "hanoi",
        title: "10) Torres de Hanói",
        description: "Resolver as Torres de Hanói (3 discos).",
        difficulty: "Difícil",
        code: `package exercicios

import "fmt"

func TorresDeHanoi(n int, origem, destino, auxiliar string) {
	if n > 0 {
		TorresDeHanoi(n-1, origem, auxiliar, destino)
		fmt.Printf("Mover disco %d de %s para %s\\n", n, origem, destino)
		TorresDeHanoi(n-1, auxiliar, destino, origem)
	}
}`,
    },
    {
        id: "dia-nascimento",
        title: "11) Dia do Nascimento",
        description: "Determinar o dia da semana de uma data de nascimento.",
        difficulty: "Médio",
        code: `package exercicios

import ("fmt" ; "time")

func DiaDaSemanaNascimento(dia, mes, ano int) {
	data := time.Date(ano, time.Month(mes), dia, 0, 0, 0, 0, time.Local)
	
	diaSemana := data.Weekday()
	
	diasEmPortugues := []string{
		"Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", 
		"Quinta-feira", "Sexta-feira", "Sábado",
	}
	
	fmt.Printf("Você nasceu em um(a): %s\\n", diasEmPortugues[diaSemana])
}`,
    },
    {
        id: "igualdade",
        title: "12) Igualdade",
        description: "Comparação booleana entre dois números.",
        difficulty: "Fácil",
        code: `package exercicios

func SaoIguais(a, b int) bool {
	return a == b
}`,
    },
    {
        id: "moda",
        title: "13) Moda",
        description: "Cálculo da moda de uma sequência.",
        difficulty: "Médio",
        code: `package exercicios

func CalcularModa(numeros []int) int {
	frequencia := make(map[int]int) // Mapa para contar repetições
	moda := 0
	maiorFrequencia := 0

	for _, num := range numeros {
		frequencia[num]++
		if frequencia[num] > maiorFrequencia {
			maiorFrequencia = frequencia[num]
			moda = num
		}
	}
	return moda
}`,
    },
    {
        id: "palindromo",
        title: "14) Palíndromo",
        description: "Verificação de palíndromo.",
        difficulty: "Médio",
        code: `package exercicios

import "strings"

func VerificarPalindromo(palavra string) bool {
	palavra = strings.ToLower(strings.ReplaceAll(palavra, " ", ""))

	runes := []rune(palavra)

	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}

	invertida := string(runes)

	return palavra == invertida
}`,
    },
    {
        id: "area-retangulo",
        title: "15) Área Retângulo",
        description: "Cálculo da área de um retângulo.",
        difficulty: "Fácil",
        code: `package exercicios

func AreaRetangulo(largura, altura float64) float64 {
	return largura * altura
}`,
    },
    {
        id: "conversao-temp",
        title: "16) Conversão Temperatura",
        description: "Conversão de Celsius para Fahrenheit.",
        difficulty: "Fácil",
        code: `package exercicios

import "fmt"

func ConverterCelsiusParaFahrenheit(celsius float64) {
	fahrenheit := (celsius * 1.8) + 32
	fmt.Printf("%.2f°C equivale a %.2f°F\\n", celsius, fahrenheit)
}`,
    },
    {
        id: "adivinhacao",
        title: "17) Jogo da Adivinhação",
        description: "Simulação de jogo da adivinhação.",
        difficulty: "Médio",
        code: `package exercicios

import (
	"fmt"
	"math/rand"
)

func JogoAdivinhacao() {
	numeroSecreto := rand.Intn(11) 
	palpite := -1
	tentativas := 0

	fmt.Println("Tente adivinhar o número entre 0 e 10!")

	for palpite != numeroSecreto {
		fmt.Print("Seu palpite: ")
		fmt.Scan(&palpite)
		tentativas++

		if palpite < numeroSecreto {
			fmt.Println("O número é MAIOR...")
		} else if palpite > numeroSecreto {
			fmt.Println("O número é MENOR...")
		}
	}

	fmt.Printf("Parabéns! Você acertou %d depois de %d vez(es).\\n", numeroSecreto, tentativas)
}`,
    },
    {
        id: "vogais-consoantes",
        title: "19) Vogais e Consoantes",
        description: "Contar vogais e consoantes de uma palavra.",
        difficulty: "Médio",
        code: `package exercicios

import "strings"

func ContarVogaisConsoantes(palavra string) (int, int) {
	vogais := "aeiouAEIOU"
	qtdVogais := 0
	qtdConsoantes := 0

	for _, letra := range palavra {
		// Verifica se é uma letra (ignora espaços ou símbolos básicos)
		if (letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z') {
			if strings.ContainsRune(vogais, letra) {
				qtdVogais++
			} else {
				qtdConsoantes++
			}
		}
	}
	return qtdVogais, qtdConsoantes
}`,
    },
    {
        id: "ocorrencia-palavra",
        title: "20) Ocorrência de Palavra",
        description: "Contar ocorrências de uma palavra em um texto.",
        difficulty: "Médio",
        code: `package exercicios

import "strings"

func ContarOcorrenciaPalavra(texto string, alvo string) int {
	textoLower := strings.ToLower(texto)
	alvoLower := strings.ToLower(alvo)
	
	return strings.Count(textoLower, alvoLower)
}`,
    },
    {
        id: "fatorial-calc",
        title: "21) Fatorial",
        description: "Cálculo do fatorial de um número.",
        difficulty: "Médio",
        code: `package exercicios

func Fatorial(n int) int {
	if n == 0 {
		return 1
	}
	resultado := 1
	for i := 1; i <= n; i++ {
		resultado *= i
	}
	return resultado
}`,
    },
    {
        id: "ola-mundo",
        title: "22) Hello World",
        description: "Exibir mensagem 'Hello World'.",
        difficulty: "Fácil",
        code: `package exercicios

import "fmt"

func OlaMundo() {
	fmt.Println("Hello World")
}`,
    },
    {
        id: "imc",
        title: "23) IMC",
        description: "Cálculo do Índice de Massa Corporal (IMC).",
        difficulty: "Fácil",
        code: `package exercicios

import "fmt"

func CalcularIMC(peso float64, altura float64) {
	imc := peso / (altura * altura)
	fmt.Printf("Peso: %.2f | Altura: %.2f | IMC: %.2f\\n", peso, altura, imc)
}`,
    },
    {
        id: "mmc",
        title: "24) MMC",
        description: "Cálculo do MMC entre dois números.",
        difficulty: "Médio",
        code: `package exercicios

func mdc(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}

func CalcularMMC(a, b int) int {
	return (a * b) / mdc(a, b)
}`,
    },
    {
        id: "media",
        title: "25) Média Aritmética",
        description: "Cálculo da média aritmética.",
        difficulty: "Fácil",
        code: `package exercicios

func CalcularMedia(numeros []float64) float64 {
	soma := 0.0
	for _, n := range numeros {
		soma += n
	}
	return soma / float64(len(numeros))
}`,
    },
    {
        id: "main",
        title: "Arquivo Main (main.go)",
        description: "Arquivo principal para executar os exercícios.",
        difficulty: "Fácil",
        code: `package main

import (
	"fmt"
	"projeto/exercicios" // Certifique-se que "projeto" é o nome que você usou no go mod init
)

func main() {
	fmt.Println("--- Exercício 1: ---")
	exercicios.Soma(10, 5)
    
    fmt.Println("--- Exercício 2: ---")
	exercicios.Divisao(10, 2)

	fmt.Println("\\n--- Exercício 3: Antecessor/Sucessor ---")
	exercicios.AntecessorSucessor(99)

	fmt.Println("\\n--- Exercício 4: Verificações ---")
	exercicios.VerificarNumero(-8)

	fmt.Println("\\n--- Exercício 5: Primos ---")
	exercicios.VerificarPrimo(17)
	exercicios.VerificarPrimo(10)

	fmt.Println("\\n--- Exercício 6: Ordenação Números ---")
	meusNumeros := []int{9, 1, 5, 2, 8} 
	exercicios.OrdenarNumeros(meusNumeros)

	fmt.Println("\\n--- Exercício 7: Ordenação Texto ---")
	exercicios.OrdenarTexto("edcba")

    fmt.Println("\\n--- 9. Ponteiros ---")
	exercicios.ImprimirValorEEndereco(100)

	fmt.Println("\\n--- 10. Torres de Hanói (3 discos) ---")
	exercicios.TorresDeHanoi(3, "A", "C", "B")

	fmt.Println("\\n--- 11. Dia do Nascimento ---")
	exercicios.DiaDaSemanaNascimento(02, 03, 2001)

	fmt.Println("\\n--- 14. Palíndromo ---")
	fmt.Println("Arara é palíndromo?", exercicios.VerificarPalindromo("Arara"))
	fmt.Println("Casa é palíndromo?", exercicios.VerificarPalindromo("Casa"))

    fmt.Println("--- 12. Igualdade ---")
	fmt.Println("5 e 5 são iguais?", exercicios.SaoIguais(5, 5))
	fmt.Println("5 e 8 são iguais?", exercicios.SaoIguais(5, 8))

	fmt.Println("\\n--- 13. Moda ---")
	lista := []int{1, 2, 3, 2, 4, 2, 5}
	fmt.Println("A moda é:", exercicios.CalcularModa(lista))

	fmt.Println("\\n--- 15. Área Retângulo ---")
	fmt.Println("Área:", exercicios.AreaRetangulo(10.0, 5.0))

	fmt.Println("\\n--- 16. Conversão Temperatura (°C → °F) ---")
	exercicios.ConverterCelsiusParaFahrenheit(30)

	fmt.Println("\\n--- 19. Vogais e Consoantes ---")
	v, c := exercicios.ContarVogaisConsoantes("Gersinho")
	fmt.Printf("Palavra 'Gersinho' tem: %d vogais e %d consoantes\\n", v, c)

	fmt.Println("\\n--- 20. Ocorrência de Palavra ---")
	texto := "O rato roeu a roupa do outro rato de Roma"
	qtd := exercicios.ContarOcorrenciaPalavra(texto, "rato")
	fmt.Println("A palavra 'rato' aparece:", qtd, "vez(es)")

	fmt.Println("\\n--- 21. Fatorial ---")
	fmt.Println("Fatorial de 5:", exercicios.Fatorial(5))

	fmt.Println("\\n--- 22. Hello World ---")
	exercicios.OlaMundo()

	fmt.Println("\\n--- 23. IMC ---")
	exercicios.CalcularIMC(80.0, 1.80)

	fmt.Println("\\n--- 24. MMC ---")
	fmt.Println("MMC de 4 e 6 é:", exercicios.CalcularMMC(4, 6))

	fmt.Println("\\n--- 25. Média ---")
	notas := []float64{7.5, 8.0, 9.5}
	fmt.Printf("A média é: %.2f\\n", exercicios.CalcularMedia(notas))
    
	fmt.Println("\\n--- Interação com u usuário ---")
    fmt.Println("\\n--- 17. Jogo da Adivinhação ---")
	exercicios.JogoAdivinhacao()
}`,
    },
]


