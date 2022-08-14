import type { GetEssayUseCase } from '../application/getEssay';
import type { GetEssaysUseCase } from '../application/getEssays';
import type { Essay, KakaoStoryFeed } from '../domain/essay';

export interface EssayService {
	readonly kakaoStoryFeeds: KakaoStoryFeed[];
	readonly essays: Essay[];
	readonly sortEssays: GetEssaysUseCase;
	getEssay(repositoryUrl: string): ReturnType<GetEssayUseCase>;
	getEssays(length: number): ReturnType<GetEssaysUseCase>;
}

// const d = getLocationWeatherUseCase
