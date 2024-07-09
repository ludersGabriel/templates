/***********
generated template classes for ./public/alunos.xsd 7/8/2024, 4:56:01 PM
***********/





export class Alunos {
    public aLUNOS_CURSO: ALUNOS_CURSO;

    public constructor(props?: Alunos) {
        this["@class"] = ".Alunos";


        if (props) {

        	this.aLUNOS_CURSO = (props.aLUNOS_CURSO) ? new ALUNOS_CURSO(props.aLUNOS_CURSO): undefined;
        }
    }
}

export class ALUNOS_CURSO {
    public ALUNO: ALUNO;

    public constructor(props?: ALUNOS_CURSO) {
        this["@class"] = ".ALUNOS_CURSO";


        if (props) {

        	this.ALUNO = (props.ALUNO) ? new ALUNO(props.ALUNO): undefined;
        }
    }
}

export class ALUNO {
    public ID_CURSO_ALUNO: number;
    public MATR_ALUNO: string;
    public ID_VERSAO_CURSO: number;
    public NOME_ALUNO: string;
    public COD_CURSO: string;
    public NOME_CURSO: string;
    public NUM_VERSAO: string;
    public ID_CURRIC_ALUNO: string;
    public ID_ATIV_CURRIC: string;
    public ANO: string;
    public MEDIA_FINAL: string;
    public SITUACAO_ITEM: string;
    public PERIODO: string;
    public COD_ATIV_CURRIC: string;
    public NOME_ATIV_CURRIC: string;
    public CREDITOS: number;
    public CH_TOTAL: number;
    public ID_LOCAL_DISPENSA: string;
    public CONCEITO: string;
    public ID_NOTA: number;
    public ID_ESTRUTURA_CUR: string;
    public DESCR_ESTRUTURA: string;
    public FREQUENCIA: string;
    public MEDIA_CREDITO: string;
    public SITUACAO_CURRICULO: string;
    public SIGLA: string;

    public constructor(props?: ALUNO) {
        this["@class"] = ".ALUNO";


        if (props) {

        	this.ID_CURSO_ALUNO = props.ID_CURSO_ALUNO;
        	this.MATR_ALUNO = props.MATR_ALUNO;
        	this.ID_VERSAO_CURSO = props.ID_VERSAO_CURSO;
        	this.NOME_ALUNO = props.NOME_ALUNO;
        	this.COD_CURSO = props.COD_CURSO;
        	this.NOME_CURSO = props.NOME_CURSO;
        	this.NUM_VERSAO = props.NUM_VERSAO;
        	this.ID_CURRIC_ALUNO = props.ID_CURRIC_ALUNO;
        	this.ID_ATIV_CURRIC = props.ID_ATIV_CURRIC;
        	this.ANO = props.ANO;
        	this.MEDIA_FINAL = props.MEDIA_FINAL;
        	this.SITUACAO_ITEM = props.SITUACAO_ITEM;
        	this.PERIODO = props.PERIODO;
        	this.COD_ATIV_CURRIC = props.COD_ATIV_CURRIC;
        	this.NOME_ATIV_CURRIC = props.NOME_ATIV_CURRIC;
        	this.CREDITOS = props.CREDITOS;
        	this.CH_TOTAL = props.CH_TOTAL;
        	this.ID_LOCAL_DISPENSA = props.ID_LOCAL_DISPENSA;
        	this.CONCEITO = props.CONCEITO;
        	this.ID_NOTA = props.ID_NOTA;
        	this.ID_ESTRUTURA_CUR = props.ID_ESTRUTURA_CUR;
        	this.DESCR_ESTRUTURA = props.DESCR_ESTRUTURA;
        	this.FREQUENCIA = props.FREQUENCIA;
        	this.MEDIA_CREDITO = props.MEDIA_CREDITO;
        	this.SITUACAO_CURRICULO = props.SITUACAO_CURRICULO;
        	this.SIGLA = props.SIGLA;
        }
    }
}
