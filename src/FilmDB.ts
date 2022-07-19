import { Application, ILinkContainer, IParagraph, LinkContainer, Paragraph } from 'fuix';
import BottomNavigation from './components/BottomNavigation';
import IBottomNavigation from './components/IBottomNavigation';
import ITopBar from './components/ITopBar';
import TopBar from './components/TopBar';
import IFilmDB from './IFilmDB';
import ObservableRoute from './observables/ObservableRoute';

export default class FilmDB extends Application implements IFilmDB {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#F4F5F7';
        this.bodyFontFamily = 'Inter';
        this.addComponents([
            this.topBar,
            this.bottomNavigation,
            this.interParagraph,
            this.eurostileParagraph,
            this.linkContainer,
        ]);
        ObservableRoute.singleton.addEventListener(ObservableRoute.ROUTE_CHANGED, this.#routeChanged.bind(this) as EventListener);
    }

    #linkContainer!: ILinkContainer;

    protected get linkContainer(): ILinkContainer {
        if (!this.#linkContainer) {
            this.#linkContainer = new LinkContainer();
            this.#linkContainer.display = 'inline-block';
            this.#linkContainer.width = 200;
            this.#linkContainer.height = 200;
            this.#linkContainer.backgroundColor = 'white';
            this.#linkContainer.href = '/film';
        }
        return this.#linkContainer;
    }

    #moviesAnchor!: HTMLAnchorElement;

    protected get moviesAnchor(): HTMLAnchorElement {
        if (!this.#moviesAnchor) {
            this.#moviesAnchor = document.createElement('a');
            this.#moviesAnchor.innerText = 'Movies';
            // this.#moviesAnchor.href = '/movies';
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
