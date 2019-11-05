export const extractActionTypes = (actions: any) => {
  return Object.values(actions).map((action: any) => action.type);
};
