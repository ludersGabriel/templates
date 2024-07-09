import { generateTemplateClassesFromXSD, verbose } from 'xsd2ts'

verbose()
generateTemplateClassesFromXSD('./public/alunos.xsd')
