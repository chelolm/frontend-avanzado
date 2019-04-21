/* import { InMemoryDbService } from 'angular-in-memory-web-api'; */
/* import { ChatDB } from './chat-db'; */
var InMemoryDataService /* implements InMemoryDbService  */ = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return {
        /* Ejemplo:
        'contacts': ChatDB.contacts,
        'chat-collections': ChatDB.chatCollection,
        'chat-user': ChatDB.user */
        };
    };
    return InMemoryDataService;
}());
export { InMemoryDataService };
//# sourceMappingURL=inmemory-db.service.js.map