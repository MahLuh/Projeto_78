var names = ["Álbum de família", "Fernanda", "Afonso", "Maria Fernanda"];
var images = ["file:///C:/Users/OFONSO/OneDrive/%C3%81rea%20de%20Trabalho/Projeto_78/imagens/desenhe-o-personagem-de-ilustracao-vetorial-gato-margarida-com-flor-para-o-estilo-de-desenho-animado-doodle-da-primavera_45130-1650.webp","file:///C:/Users/OFONSO/OneDrive/%C3%81rea%20de%20Trabalho/Projeto_78/imagens/MaeDoHu3cat.png.webp", "file:///C:/Users/OFONSO/OneDrive/%C3%81rea%20de%20Trabalho/Projeto_78/imagens/gato-com-filhote-isolado-no-fundo-branco-familia-de-gatinhos-animais-domesticos-pai-engracado-bonito-com-crianca-ou-filhote-mae-e-bebe-ou-prole-ilustracao-em-vetor-colorido-plan.webp","file:///C:/Users/OFONSO/OneDrive/%C3%81rea%20de%20Trabalho/Projeto_78/imagens/Irm%253Fsdohu3cat.png.webp"];
var i = 0;
function update(){
    i++;
    var numbersOffFamilyMemberInArray = 5
    if (1>numbersOffFamilyMemberInArray){
        i = 0; 
    }
    var updateName = names[i];
    document.getElementById("familyMemberName").innerHTML = updatedName;
    document.getElementById("familyMemberImage").src = updateImage;
}