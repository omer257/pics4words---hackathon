import DaysRepository from './daysRepository.js';
import renderer from './renderer.js';
import eventsHandler from './eventsHandler.js'; 
import daysApi from './ajaxApi.js'
import wordApi from './wordApi.js'
import oxfordApi from './oxfordApi.js'

let DayApi = new daysApi();
let WordApi = new wordApi();
let OxfordApi = new oxfordApi()
let dayRepository = new DaysRepository(DayApi, WordApi, OxfordApi);
let Renderer = new renderer();
let EventsHandler = new eventsHandler(dayRepository, Renderer);


EventsHandler.registerAddImage();
EventsHandler.registerLikeImage();
EventsHandler.registerDIsslikeImage();
// eventsHandler.registerRemovePost();
// eventsHandler.registerToggleComments();
// eventsHandler.registerAddComment();
// eventsHandler.registerRemoveComment();
// eventsHandler.upPhoto();



dayRepository.initData().then( () => { 
    Renderer.renderDay(dayRepository.images, dayRepository)});