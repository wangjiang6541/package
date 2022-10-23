/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
 exports.example = () => 'hello world';

 exports.stripPrivateProperties = (keys, arr) => {
   if (!keys || !keys.length || !arr) {
     return arr || [];
   }
   arr.forEach(item => {
     keys.forEach(k => delete item[k]);
   })
   return arr;
 };
 
 exports.excludeByProperty = (key, arr) => {
   if (!key || !arr) {
     return arr || [];
   }
   const res = arr.filter(item => !item[key]);
   return res;
 };
 
 exports.sumDeep = (arr) => {
   if (!arr || !arr.length) return [];
   const res = arr.map(item => {
     const { objects = [] } = item;
     return {
       'objects': objects.reduce((cur, next) => cur + next.val || 0, 0)
     }
   })
   return res;
 };
 
 exports.applyStatusColor = (colorStatus, status) => {
   const map = new Map();
   let res = [];
   const colorStatusArr = Object.entries(colorStatus);
   colorStatusArr.forEach(c => {
     c[1].forEach(item => map.set(item, c[0]))
   });
   const defaultColor = 'defaultColor';
   status.forEach(s => {
     s.color = map.get(s.status) || defaultColor;
   })
   res = status.filter(s => s.color !== defaultColor);
   return res;
 };
 
 exports.createGreeting = (fun, greeting) => {
   return (name) => fun(greeting, name)
 };
 
 exports.setDefaults = () => {
   return (obj) => Object.assign({ subscribed: true }, obj)
 };
 
 exports.fetchUserByNameAndUsersCompany = (name, services) => {
   async function fetchServer() {
     const users = await services.fetchUsers();
     const user = users.find(user => user.name === name);
     const company = await services.fetchCompanyById(user.companyId);
     const status = await services.fetchStatus();
     return Promise.resolve({
       user,
       company,
       status
     })
   }
   return fetchServer();
 };
 
 