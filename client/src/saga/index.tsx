import watchRegister from './register.saga';
import watchToast from './toast.saga';
import watchFbLogin from './fbLogin.saga';

const watchers = [watchRegister, watchToast, watchFbLogin];

export default watchers;