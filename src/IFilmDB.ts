import { IApplication } from 'fuix';
import IAppsContainer from './apps/IAppsContainer';

export default interface IFilmDB extends IApplication {
    readonly appsContainer: IAppsContainer;
}
