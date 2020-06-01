import watchRegister from './register.saga';
import watchSignIn from './login.saga';

const watchers = [watchRegister, watchSignIn];

export default watchers;
