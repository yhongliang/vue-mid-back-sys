// export const transformRoute = (route: any) => {
//     // 1.将后端路由数据转化为Vue Router路由对象
//     const { path, name, component, children } = route;
//     const routeObj: any = {
//         path,
//         name,
//         component: () => import(`@/views/${component}.vue`),
//     };
//     // 2.如果有子路由，递归调用
//     if (children && children.length) {
//         routeObj.children = children.map((child: any) => transformRoute(child));
//     }
//     return routeObj;
// }
export const transformRoutes = (backendRoutes: any) => {
    return backendRoutes.map((route: any) => ({
        path: route.path,
        name: route.name,
        component: () => import(`@/views/${route.component}.vue`),
        meta: {
            title: route.title,
            icon: route.icon,
            roles: route.roles
        },
        children: route.children ? transformRoutes(route.children) : []
    }))
}