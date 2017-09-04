const routes = [];

const importAll = (req) => req.keys().forEach(key => routes.push(req(key)));

importAll(require.context('./Containers', true, /Route.js$/));

export const createRoutes = (store) => (routes.map((r) => r.default(store)))
