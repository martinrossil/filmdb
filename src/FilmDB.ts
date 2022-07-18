import { Application, IComponent, IParagraph, Paragraph } from 'fuix';
import BottomNavigation from './components/BottomNavigation';
import IBottomNavigation from './components/IBottomNavigation';
import ITopBar from './components/ITopBar';
import TopBar from './components/TopBar';
import IFilmDB from './IFilmDB';
import ObservableRoute from './observables/ObservableRoute';

export default class FilmDB extends Application implements IFilmDB {
    public constructor() {
        super();
        console.log('FilmDB constructor');
        this.bodyBackgroundColor = '#F4F5F7';
        this.bodyFontFamily = 'Inter';
        this.addComponents([
            this.topBar,
            this.bottomNavigation,
            this.interParagraph,
            this.eurostileParagraph,
            this.moviesAnchor as unknown as IComponent,
        ]);
        console.log(window.location.search, window.location.hash);
        console.log('route', ObservableRoute.singleton.route);
        ObservableRoute.singleton.addEventListener(ObservableRoute.ROUTE_CHANGED, this.#routeChanged.bind(this) as EventListener);
    }

    #moviesAnchor!: HTMLAnchorElement;

    protected get moviesAnchor(): HTMLAnchorElement {
        if (!this.#moviesAnchor) {
            this.#moviesAnchor = document.createElement('a');
            this.#moviesAnchor.innerText = 'Movies';
            this.#moviesAnchor.href = '/movies';
        }
        return this.#moviesAnchor;
    }

    #routeChanged(e: CustomEvent<string>): void {
        console.log(e.type, e.detail);
    }

    #interParagraph!: IParagraph;

    public get interParagraph(): IParagraph {
        if (!this.#interParagraph) {
            this.#interParagraph = new Paragraph();
            this.#interParagraph.text = 'Hæøå ÆØÅ H';
            this.#interParagraph.fontSize = 64;
            this.#interParagraph.fontWeight = 700;
            this.#interParagraph.lineHeight = 0.72;
        }
        return this.#interParagraph;
    }

    #eurostileParagraph!: IParagraph;

    public get eurostileParagraph(): IParagraph {
        if (!this.#eurostileParagraph) {
            this.#eurostileParagraph = new Paragraph();
            this.#eurostileParagraph.text = 'Hæøå ÆØÅ H';
            this.#eurostileParagraph.fontFamily = 'Eurostile Extd';
            this.#eurostileParagraph.fontSize = 64;
            this.#eurostileParagraph.lineHeight = 0.68;
        }
        return this.#eurostileParagraph;
    }

    #topBar: ITopBar = new TopBar();

    public get topBar(): ITopBar {
        return this.#topBar;
    }

    #bottomNavigation: IBottomNavigation = new BottomNavigation();

    public get bottomNavigation(): IBottomNavigation {
        return this.#bottomNavigation;
    }
}
customElements.define('film-db', FilmDB);
