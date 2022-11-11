import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticate';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateClientController } from './modules/account/authenticateClient/authenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryMan/authenticateDeliveryManController';
import { CreateClientController } from './modules/clients/useCases/createClientUseCase/createClientController';
import { FindAllClientDeliveriesController } from './modules/clients/useCases/findAllDeliveries/findAllClientDeliveriesController';
import { CreateDeliveryController } from './modules/delivery/createDeliveryUseCase/createDeliveryControler';
import { FindAllAvailableController } from './modules/delivery/findAllAvailable/findAllAvailableController';
import { UpdateDeliveryManController } from './modules/delivery/updateDeliveryman/updateDeliverymanController';
import { UpdateEndDateController } from './modules/delivery/updateEndDate/updateEndDateController';
import { CreateDeliveryManController } from './modules/deliveryman/deliverymanUseCase/createDeliveryManUseCase/createDeliveryManController';
import { FindAllDeliverymanDeliveriesController } from './modules/deliveryman/deliverymanUseCase/findAllDeliveriesUseCase/findAllDeliveriesDeliverymanController';

const routes = Router();



const createClientController = new CreateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliveryManController();
const findAllClientDeliveriesController = new FindAllClientDeliveriesController();
const findAllDeliverymanDeliveriesController = new FindAllDeliverymanDeliveriesController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliveryManController.handle);
routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle);


routes.patch("/delivery/updatedeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
routes.patch("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle);



routes.get("/delivery/getAllAvailable", ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.get("/client/deliveries", ensureAuthenticateClient, findAllClientDeliveriesController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliverymanDeliveriesController.handle);

export { routes }