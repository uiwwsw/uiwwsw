import { EssayAdapter } from '$architecture/essay';
import { container } from '$di/container';
import { TOKENS } from '$di/token';

container.bind(TOKENS.essayService).toInstance(EssayAdapter).inContainerScope();

// const EssayModule = container.get(TOKENS.essayService);
// export { EssayModule };
