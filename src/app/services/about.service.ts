import { computed, Injectable, signal } from '@angular/core';
import { BasicInfo, Education, Experience } from '../interfaces/basic-info.interface';

@Injectable({ providedIn: 'root' })
export class AboutService {


    private _about = signal<string>(`
        Computer Engineer with experience in customer service, responsible, capable of creating ideas
        and initiatives for problem solving, teamwork and delegation of activities. Punctual, organized
        and responsible. I am a very cheerful, optimistic and enthusiastic person. With a great desire to
        grow professionally in the area of information and communication technologies. With experience in the development of web and mobile systems, general knowledge of Administration of
        Windows and Linux platforms, Basic Shell Script, HTML, CSS, JavaScript, Bootstrap, Jquery,
        Angular, NodeJs, NestJS , MongoDB, GIT, TypeScript, development of WEB applications using the
        Angular framework (JavaScript), CMS(Wordpress, Woocommerce & E-commerce), Vmware,
        Jmeter, Apache, AWS, MySql, unity testing / integral testing.`
    );


    private skills = signal<{ id: number, value: string }[]>(
        [
            { id: 1, value: 'Angular' },
            { id: 2, value: 'MongoDB' },
            { id: 3, value: 'JavaScript' },
            { id: 4, value: 'TypeScript' },
            { id: 5, value: 'NodeJS' },
            { id: 6, value: 'Express' },
            { id: 7, value: 'Bootstrap' },
            { id: 8, value: 'CSS' },
            { id: 9, value: 'HTML' },
            { id: 10, value: 'Git' },
            { id: 21, value: 'NestJS' },
            { id: 22, value: 'Golang' },
            { id: 23, value: 'Docker' },
            { id: 16, value: 'Ubuntu GNU/Linux' },
            { id: 17, value: 'Debian GNU/Linux' },
            { id: 18, value: 'JSON' },
            { id: 19, value: 'Scrum' },
            { id: 20, value: 'AWS' },
            { id: 11, value: 'GitHub & GitLab' },
            { id: 12, value: 'Xcode' },
            { id: 13, value: 'Shell Scripting Basic' },
            { id: 14, value: 'MySql' },
            { id: 15, value: 'AJAX' }
        ]
    );

    private _user = signal<BasicInfo>({
        address: 'Camino San Miguel 350, Talca',
        country: 'Chile',
        email: 'adrianbravo145@gmail.com',
        phone: '+56936742459',
        degree: 'Computer Engineer',
        job: 'Full Stack Developer',
        name: 'Adrian Bravo'
    });

    private _education = signal<Education[]>([
        {
            title: 'Computer Engineer',
            institution: 'IUT (Venezuela)',
            name: 'Completed a Computer Engineering program at Instituto Universitario Doctor Dederico rivero palacios.',
            date: '2015 - 2016',

        },
        {
            title: 'Informatics Certificate of Higher Education',
            institution: 'IUT (Venezuela)',
            name: 'Obtained an Informatics Certificate of Higher Education from Instituto Universitario Doctor Dederico rivero palacios.',
            date: '2008 - 2014',
        },
        {
            title: 'UDEMY',
            institution: 'UDEMY',
            date: '2018',
            name: 'Completed a course on UDEMY.'
        },
        {
            title: 'Angular & Angular 8: Basic to Advanced Course',
            institution: 'UDEMY',
            date: '2019',
            name: 'Completed a course on Angular & Angular 8: Basic to Advanced Course on UDEMY.'
        }
    ]);

    private _experience = signal<Experience[]>([
        {
            title: 'Full Stack Developer',
            company: 'Acid Labs',
            date: '2020 - Current ',
            description: [
                {
                    id: 1,
                    desc: `Web Application Development under the JavaScript, HTML5,CSS3 programming language and JavaScript-based frameworks.`
                },
                {
                    id: 2,
                    desc: `Using Angular as frontend framework, using technologies such as NodeJs (Express) on the backend.`
                },
                {
                    id: 3,
                    desc: `Microservices and cronjobs development in golang (Go).`
                },
                {
                    id: 8,
                    desc: `Development API RESTFULL on Netsjs and golang.`
                }
            ]
        },
        {
            title: 'FrontEnd Web / Mobile Developer',
            company: 'Inovabiz SPA',
            date: '2020 - 2020',
          
            description: [
                {
                    id: 4,
                    desc: `Development of mobile applications under the programming
                        language JavaScript, HTML5, CSS3 and frameworks based on
                        JavaScript such as Angular with the integration of Ionic.`
                },
                {
                    id: 5,
                    desc: `On the
                        backend branch using technologies such as NodeJs (Express)
                        and NestJs`
                },
            ]
        },
        {
            title: 'FrontEnd Web Developer',
            company: 'Emergya Consultants',
            date: '2019 - 2020',
            description: [
                {
                    id: 6,
                    desc:  `Development of Web Applications under the programming language JavaScript, HTML5, CSS3 and JavaScript-based frameworks such as Angular + 4.`
                },
                {
                    id: 7,
                    desc:  `Working on the cloud side such as Amazon Web Services..`
                },
            ]
        }
    ])


    public getAbout = computed(() => this._about());
    public getSkills = computed(() => this.skills());
    public getUser = computed(() => this._user());
    public getEducation = computed(() => this._education());
    public getExperience = computed(() => this._experience());

    constructor() { }

}