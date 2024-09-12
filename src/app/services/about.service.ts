import { computed, Injectable, signal } from '@angular/core';
import { BasicInfo, Education, Experience } from '../interfaces/basic-info.interface';

@Injectable({ providedIn: 'root' })
export class AboutService {


    private _about = signal<string>(`
        Técnico superior en Diseño Gráfico, estoy familiarizado con el uso de diversos programas bajo Windows y MacOS, incluyendo Photoshop, Illustrator, In Design, After Effects y Adobe Premier. Ademas de tener habilidades para toma y retoque de fotografías, asi como rodaje de video para uso publicitario en redes sociales y otros medios, gigantografía y POP.`
    );


    private skills = signal<{ id: number, value: string }[]>(
        [
            { id: 1, value: 'PHOTOSHOP' },
            { id: 2, value: 'ILLUSTRATOR' },
            { id: 3, value: 'AFTER EFFECTS' },
            { id: 4, value: 'ADOBE PREMIERE' },
            { id: 5, value: 'IN DESIGN' },
            { id: 6, value: 'FOTOGRAFÍA' },
            { id: 7, value: 'RODAJE DE VIDEOS' },
            { id: 8, value: 'CONTENIDO PARA RRSS' },
        ]
    );

    private _user = signal<BasicInfo>({
        address: 'Marin 145, Santiago',
        country: 'Chile',
        email: 'dannybdp92@gmail.com',
        phone: '+56932441382',
        degree: 'Diseño Gráfico',
        job: 'Diseñador Gráfico',
        name: 'Daniel Peña'
    });

    private _education = signal<Education[]>([
        {
            title: 'Técnico Superior Universitario en la mención Diseño Gráfico.',
            institution: 'IUTIRLA',
            name: 'Instituto Universitario de Tecnología Industrial "Rodolfo Loero Arismendi.',
            date: '2011 - 2015',

        },
        {
            title: 'E.T.C. “DR. JESÚS MUÑÓZ TEBAR”',
            institution: 'E.T.C. “DR. JESÚS MUÑÓZ TEBAR”',
            name: 'Técnico Médio en la mención Informática.',
            date: '2008 - 2010',
        }
    ]);

    private _experience = signal<Experience[]>([
        {
            title: 'Disenador Freelance',
            company: 'ACTIMEDIA DIGITAL (MIAMI)',
            date: 'FEB 2021 - ACTUAL',
            description: [
                {
                    id: 1,
                    desc: `Trabajo en modalidad freelance remoto con trabajo asignado por medio de calendario digital. Me encargo del contenido de RRSS de diferentes clientes asignados por mi jefe directo, incluyendo parte del contenido de productos P.A.N. y Acer.`
                },
                {
                    id: 2,
                    desc: `Creación de videos animados para redes sociales, retoque fotográfico y foto-montajes, edición de videos con contenido original, reedición de spots publicitarios, entre otras responsabilidades.`
                }
            ]
        },
        {
            title: 'Diseñador Freelance',
            company: 'COMERCIAL TOROGOZ',
            date: 'FEB 2018 - SEPT 2019',

            description: [
                {
                    id: 3,
                    desc: `Con Torogoz logré desarrollarme como diseñador freelance creando material visual para impulsar las ventas de la empresa por medio de publicaciones y vídeos para redes sociales.`
                }
            ]
        },
        {
            title: 'Diseñador Gráfico Senior',
            company: 'REPRESENTACIONES MULCOMANIA',
            date: 'AGO 2016 - ENE 2019',
            description: [
                {
                    id: 4,
                    desc: `Diseño y actualización de catálogos de productos para ventas online. Así como también el diseño de distintos materiales para publicidad web de las marcas en venta, manejo de redes sociales, plataformas de ventas y optimi- zación de fotografías para ventas online en Venezuela, Chile, entre otros países latinoamericanos.`
                },
               
            ]
        },
        {
            title: 'Diseñador Gráfico Junior',
            company: 'GRUPO TSWATCH TECHNOSPORT',
            date: 'OCT 2015 - AGO 2016',
            description: [
                {
                    id: 4,
                    desc: `Diseño de campañas publicitarias para los relojes Technosport y marcas asociadas para Venezuela y otros países como Panamá, España y Mexico.`
                },
                {
                    id: 4,
                    desc: `Diseño y ajustes de materiales visuales para diferentes formatos, impresos, gigantografías, material web, redes sociales, diseño y diagramación de catálogos y retoque fotográfico.`
                },
               
            ]
        },
    ])


    public getAbout = computed(() => this._about());
    public getSkills = computed(() => this.skills());
    public getUser = computed(() => this._user());
    public getEducation = computed(() => this._education());
    public getExperience = computed(() => this._experience());

    constructor() { }

}