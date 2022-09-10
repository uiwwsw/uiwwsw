import { ApiService } from '@/application/ports';
import { convertFeedsToEssays, Essay, KakaoStoryFeed } from '@/domain/essay';
import {
	convertGithubReposToPortfolios,
	GithubRepo,
	Portfolio,
} from '@/domain/portfolio';
import { Weather } from '@/domain/weather';
import OpenWeatherMap from 'openweathermap-ts';
export class ApiMockAdapter implements ApiService {
	async fetchEssays(): Promise<Essay[]> {
		const feeds: KakaoStoryFeed[] = [
			{
				id: '_aVW4Z8.EKj7L6WbE5A',
				url: 'https://story.kakao.com/_aVW4Z8/EKj7L6WbE5A',
				media_type: 'NOTE',
				created_at: '2022-08-09T01:47:07Z',
				content:
					'사람의 실수를 이해하려 노력하자.\n모두가 잘할 수 없어.\n실수하면 실수한거구나\n그걸로 이해하고 넘어가주는\n나는 못받았어도 베풀 수 있는 사람이 되길',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
			{
				id: '_aVW4Z8.eI4V4ZQGd5A',
				url: 'https://story.kakao.com/_aVW4Z8/eI4V4ZQGd5A',
				media_type: 'NOTE',
				created_at: '2022-08-08T12:58:56Z',
				content:
					'의사소통이 참 중요하다.\n누가 말을 하면 듣는 척을 해야한다.\n\n그래서 다들 듣는 척만 하나보다.\n걱정되서 연락했다니까\n12시에 일정있으니 문제없담말을 두번씩 한다.\n\n어이없',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
			{
				id: '_aVW4Z8.3IeZDm8Ta39',
				url: 'https://story.kakao.com/_aVW4Z8/3IeZDm8Ta39',
				media_type: 'NOTE',
				created_at: '2022-08-06T07:53:15Z',
				content:
					'감정은 당근이 아니다.\n\n그래서 내 것이 진짜라도\n남의 것은 가짜일 수 있다.\n\n아무리 값 비싼걸 주더라도\n싸구려를 돌려 받아도 그러려니, 어쩔 수 없다.',
				comment_count: 0,
				like_count: 0,
				permission: 'PUBLIC',
			},
			{
				id: '_aVW4Z8.DJQr7Sutb5A',
				url: 'https://story.kakao.com/_aVW4Z8/DJQr7Sutb5A',
				media_type: 'NOTE',
				created_at: '2022-08-06T07:48:38Z',
				content: '기대와 실망 사이 어딘가',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
			{
				id: '_aVW4Z8.5EtaiTGY939',
				url: 'https://story.kakao.com/_aVW4Z8/5EtaiTGY939',
				media_type: 'NOTE',
				created_at: '2022-08-04T13:34:28Z',
				content:
					'지루하다는건\n내 위치를 제대로 모르거나\n세상이 만만해서가 아닐까',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
			{
				id: '_aVW4Z8.a1uI9LQs740',
				url: 'https://story.kakao.com/_aVW4Z8/a1uI9LQs740',
				media_type: 'NOTE',
				created_at: '2022-08-02T13:58:43Z',
				content:
					'골머리를 앓는 문제는 \n내가 해결할 수 없을 때 발생한다.\n\n그러니까 키를 쥔 사람이 나일 땐\n지지든 볶든 알아서 할 수 있고 그래서 걱정거리가 아니지만, 그 반대일 경우 우리는 해결하기 전까지 걱정이란 걸 한다.\n\n근데 이 걱정은 무쓸모다.\n걱정하는 동안 획기적인 방법이 떠오르지도 않고\n더군다나 그 문제는 우리가 획기적인 방법을 찾는 속도보다 빨리 커져서 시간이 갈수록 사실상 분리하다.\n\n그래서 빨리 내가 키를 쥐는 게 중요하다.\n이 말은 무엇이냐, 저지르는 것이다.\n\n뭣이 됐든 저지르고 나면\n우리에게 키가 돌아온다.\n\n그리고 나면 이제 차분히 걱정하면 된다.\n내 처신이 부족했다면 내가 성장하면 되고\n그 사람의 처신이 부족했다면 다시 한 번 대화를 해보면 되고, 뭐든 간에 이제 다음 해결책을 느긋이 걱정해도 괜찮은, 시간의 키를 내가 쥐게 된다.\n\n전자라도 크게 실망하지 않아도 된다.\n우린 그만큼 성장한 것일 테니까.',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
			{
				id: '_aVW4Z8.kB9v69smy5a',
				url: 'https://story.kakao.com/_aVW4Z8/kB9v69smy5a',
				media_type: 'NOTE',
				created_at: '2022-07-26T14:25:34Z',
				content:
					'불만이 있으면 양 볼에 바람을 불어넣는 버릇이 있다. 서른이 된 지금 내 볼이 더는 부풀지 않지만, 누구든지 내 기분을 알 수 있는 건 여전하다고들 하더라. 세 살 버릇 어디 가겠나. \n\n정확히 몇 살이었는진 모르지만, 토실했던 난 양 볼에 바람을 있는 힘껏 넣고는 뱉어내며 신세 한탄을 했다. “푸룩”하는 바람 빠지는 소리와 함께 나온 단어들은 이해하기 어려울 만큼 작은 소리의 뭉게어진 것이었지만 선명한 몇 가지 단어들 덕분에 그 뜻은 쉽게 추측할 수 있었다. 그건 어른이 되고자 하는 어린이의 소망이었다.\n\n볼록한 볼이 궁금했던 주변 어른들은 내게 다가와 무슨 일인지 물어보고는 각자의 경험담을 처방하여 날 안심시키려 했다.\n\n하지만 난 꾀 오랫동안 어른이 되는 걸 믿지 않았다. 절대 일어나지 않을 것 같았고 나이가 든 내 모습을 상상도 할 수 없었다.\n\n그래서 샐 수 없이 소망했다. 오늘보다 빠른 내일이 되길, 밤마다 빌었다.\n\n그러다 마침내 찾아온 20대는 어떻게 갔는지 모를 만큼 정신없이 지나갔고, 30대가 되니 이제 정신 좀 차릴 것 같은데, 문제는 시간의 속도다. \n\n눈깜짝하면 일년이 가 버린다.\n\n소원이 지금에서야 이뤄진 것 같다.',
				comment_count: 0,
				like_count: 0,
				permission: 'PUBLIC',
			},
			{
				id: '_aVW4Z8.dQjsVKgMY4A',
				url: 'https://story.kakao.com/_aVW4Z8/dQjsVKgMY4A',
				media_type: 'NOTE',
				created_at: '2022-07-26T14:20:17Z',
				content:
					'나이가 든다는 건,\n세상의 중심이 내가 아니란 걸 깨닫는 것이다.\n\n자신이 고작 조연도 안된다는걸 깨닫고 받아들이는데까지 사람마다 다 다른 시간이 필요한데, 난 30년정도, 이렇게나 많은 시간이 필요했나 싶다.\n\n매일 슬펐고 이유없이 좌절했다. 그 슬픔이 끝나지 않을것만 같았다.\n\n지금 생각해보면 답은 아주 오래전부터 곁에 있었다. 내가 외면하고 있었을 뿐이다. 그 답이 틀리지 않다는건 알고 있었지만, 그래도 내 경우는 다를 수 있다고 마음 속 깊이 기적을 바라고 있었던것 같다. 그 믿음을 깨는데 서른이라는 무게감이 필요했다.',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
			{
				id: '_aVW4Z8.cDJ5y0dlx30',
				url: 'https://story.kakao.com/_aVW4Z8/cDJ5y0dlx30',
				media_type: 'NOTE',
				created_at: '2022-07-26T14:19:03Z',
				content:
					'안개 때문에 제 속도를 내지 못하는 버스, 그곳의 승객들은 평소와 다른 속도를 파악하기 위해 정면을 주시했다. 누구는 목을 빼서 이리저리 둘러봤고 또 누구는 자리에서 일어서기까지 했다. 어찌 보면 당연한 행동 같다. 하지만 보일 땐 보지 않고 보이지 않을 때만 보려고 노력하는 게 우리 삶과 비슷해 안타까웠다.\n매번 보이지 않을 때만 정면을 보며, 보이지 않는다고 말하고 있는 건 아닌가 싶었다.',
				comment_count: 0,
				like_count: 0,
				permission: 'PUBLIC',
			},
			{
				id: '_aVW4Z8.GIoTWNcLY4A',
				url: 'https://story.kakao.com/_aVW4Z8/GIoTWNcLY4A',
				media_type: 'NOTE',
				created_at: '2022-07-26T13:49:33Z',
				content:
					'떠올리지 않아도 당신이 그려졌던 때가 있었다. 그땐 당신에 대해 이야기할 때조차, 당신을 떠올릴 필요가 없었다. 그냥 입을 열면 당신의 말투, 당신의 존재가 내게 빙의된 듯 이야기가 이어졌기 때문이다. 어쩌면 그땐 내 존재가 당신의 조각이었는지도 모르겠다.\n\n아주 오랜만에 난 당신에 대해 떠올려보았다. 정확히 하자면 떠올리려 노력했고 무엇 때문인지 모르겠지만 그러지 못했다. 오랜만이라 그런지 아니면 더는 당신을 걱정할 이유가 사라진 건지, 모르긴 해도 당신은 이제 내게 없나 보다.\n\n당신이 떠오르지 않는 건 헤어지고 4년 만의 일이다. 당신이 날 부르던 음성도 이젠 기억나지 않았다.\n\n그런데 떠올려본 행위는 마치 상처 위에 옅게 앉은 딱지를 떼어내는 것과 같았고 그 상처에선 피처럼, 남아있던 기억들이 뿜어져 나오기 시작했다.\n\n졸린 눈으로 준비해준 생일상과, 음식이 모두 다 식어버렸다며 억울함에 삐쭉내민 입술과, 차가워서 더 맛있다는 내 거짓말에 대답으로 건넨 너의 손편지가, 허공에 흩뿌려졌다.',
				comment_count: 0,
				like_count: 0,
				permission: 'PUBLIC',
			},
			{
				id: '_aVW4Z8.jUicPYhLy5a',
				url: 'https://story.kakao.com/_aVW4Z8/jUicPYhLy5a',
				media_type: 'NOTE',
				created_at: '2022-07-26T13:37:17Z',
				content:
					'누군갈 사랑하는건 대단한 일이다. 어느 책에선 사랑은 운명이니 하는 따위가 아닌, 노력하면 언젠가 이뤄지는거라 했지만, 내 생각은 그렇지 않다.\n\n분명 그런 사랑도 있을 것이다. 퇴근길에 자주 듣는 박소현의 러브레터에서는 종종 이와 비슷한 사연들이 소개된다. 그 사연들은 한결같이, 오랜 노력이 상대의 마음을 얻을 수 있다 말한다. \n\n물론 노력이 나쁜것도, 틀린것도 아니다. 이 또한 사랑이며 대단한 일임에는 틀림없다. 다만, 내가 꿈꾸는 사랑이 이보다 조금 더 거창할 뿐이다.',
				comment_count: 0,
				like_count: 0,
				permission: 'PUBLIC',
			},
			{
				id: '_aVW4Z8.fLI3tgYKY4A',
				url: 'https://story.kakao.com/_aVW4Z8/fLI3tgYKY4A',
				media_type: 'NOTE',
				created_at: '2022-07-26T13:30:38Z',
				content:
					'가을은, 타이밍을 고민하다 딱 알맞은 타이밍에 내 앞에 나타나 날 놀라킨다.\n\n오늘이 바로 그날이었다. \n평소 같은 아침 출근길에 난대 없는 어둠이 깔려 있었다. 이건 마치 퇴근 후 재출근하는 느낌마저 들었으며 또 하루키의 말처럼 같지만 다른 세상인 것 같기도 했다. 그렇게 가을은 내가 알던 세상을 온통 어둡게 만들어 버렸다. 아침 해로 밝던 하늘은 하루아침에 저녁노을처럼, 낮밤이 분간이 가지 않는 어중간한 어둠으로 변해 있었다.\n\n이제 퇴근할 때도 어둡겠지 하는 마음에 조금은 서글프기도 하다.',
				comment_count: 0,
				like_count: 0,
				permission: 'PUBLIC',
			},
			{
				id: '_aVW4Z8.51PxXGOJX29',
				url: 'https://story.kakao.com/_aVW4Z8/51PxXGOJX29',
				media_type: 'NOTE',
				created_at: '2022-07-26T13:26:27Z',
				content:
					'연륜이라는건\n경험치를 뜻하는 것 같다.\n\n어떻게 해야 더 좋은지를 나타내는 것인데,\n삶의 규칙들이\n서로 충돌하며 틀어진다.\n\n뼈대만 남은 채 흐트러지고\n다시 그것들을 추스르고 살아간다.\n\n서른이라느 여린 어른',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
			{
				id: '_aVW4Z8.FPD2nG5OX4A',
				url: 'https://story.kakao.com/_aVW4Z8/FPD2nG5OX4A',
				media_type: 'NOTE',
				created_at: '2022-07-25T09:22:26Z',
				content:
					'망향휴게소라는 단어가 익숙하다 싶었는데 오해였다.\n\n내겐\n버스정류장에서 보이는 식당이름이고,\n별내 맛집 검색하면 나오는 이름일 뿐,\n실상의 망향휴게소와는 서로 모르는 사이다.',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
			{
				id: '_aVW4Z8.BMq8lcEIV30',
				url: 'https://story.kakao.com/_aVW4Z8/BMq8lcEIV30',
				media_type: 'NOTE',
				created_at: '2022-07-23T10:00:13Z',
				content:
					'자욱한 담배 연기는 싫다고 했다.\n\n"다행이다. 그것도 좋아했으면 널 다시 봤을 거야"\n\n또 해줘.\n\n나는 조심스레 담배 연기를 그녀의 얼굴에 뱉었다.\n\n또.\n\n다시 한 번 깊게 들이마시고. 목구멍부터 가슴 어딘가까지 느껴지는 뜨거움을 어느 정도 옅어지길 기다린 뒤, 그녀에게 조심스레 뱉어냈다. 또 가 멈출 때까지.',
				comment_count: 0,
				like_count: 0,
				permission: 'PUBLIC',
			},
			{
				id: '_aVW4Z8.6DV0ejlHu29',
				url: 'https://story.kakao.com/_aVW4Z8/6DV0ejlHu29',
				media_type: 'NOTE',
				created_at: '2022-07-23T09:49:34Z',
				content:
					'평소에 보지 못하는 자연을 마주하면\n역시나 그렇듯 머리가 투명해진다.\n\n끝도 없이 펼쳐진 자연이 차원을 넘어와\n머리속을 가득 메우는 것 같다.',
				comment_count: 0,
				like_count: 0,
				permission: 'PUBLIC',
			},
			{
				id: '_aVW4Z8.iZMDDgGiW5a',
				url: 'https://story.kakao.com/_aVW4Z8/iZMDDgGiW5a',
				media_type: 'NOTE',
				created_at: '2022-07-23T09:46:16Z',
				content:
					'기대치에 대해서\n\n사람에게 기대하는 기대치가 높다는것\n나의 성급함때문이라 생각했는데\n성급함이 전혀 없진 않겠지만 더한 원인이 생각났다.\n역지사지에서 오는 기본이 높은 것이다.\n\n실수 할 수 있다. 그러면 사과하면 되지 않나.\n나는 세상을 그렇게 살아왔다. 체면이고 뭐고 실수하면 사과하고 미안해하고.\n\n그런데 아닌가보다. 사과안해야 자기의 위치가 지켜지고 아닌척해야 자기의 권위가 수립되는가보다.\n\n그래서 그런것 같다',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
			{
				id: '_aVW4Z8.2Coqd3n9U29',
				url: 'https://story.kakao.com/_aVW4Z8/2Coqd3n9U29',
				media_type: 'NOTE',
				created_at: '2022-07-22T15:03:41Z',
				content:
					'기대치의 문제였구나. 나는 누군갈 이만큼은 하겠다고 생각하고 그게 깨지면 배신감을 느낀것 같다.\n역시 상황을 글로쓰면 너무 하찮아진다.',
				comment_count: 0,
				like_count: 0,
				permission: 'ONLY_ME',
			},
		];
		return await new Promise((resolve) =>
			setTimeout(() => resolve(convertFeedsToEssays(feeds)), 100)
		);
	}
	async fetchPortfolios(): Promise<Portfolio[]> {
		const githubRepos: GithubRepo[] = [
			{
				id: 461350052,
				node_id: 'R_kgDOG3-kpA',
				name: '10-minutes',
				full_name: 'uiwwsw/10-minutes',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/10-minutes',
				description: 'electron',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/10-minutes',
				forks_url: 'https://api.github.com/repos/uiwwsw/10-minutes/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/10-minutes/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/10-minutes/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/10-minutes/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/10-minutes/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/10-minutes/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/10-minutes/deployments',
				created_at: '2022-02-20T00:47:47Z',
				updated_at: '2022-06-29T02:46:10Z',
				pushed_at: '2022-03-09T06:30:41Z',
				git_url: 'git://github.com/uiwwsw/10-minutes.git',
				ssh_url: 'git@github.com:uiwwsw/10-minutes.git',
				clone_url: 'https://github.com/uiwwsw/10-minutes.git',
				svn_url: 'https://github.com/uiwwsw/10-minutes',
				homepage: null,
				size: 217,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'main',
			},
			{
				id: 240636942,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNDA2MzY5NDI=',
				name: 'cl',
				full_name: 'uiwwsw/cl',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/cl',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/cl',
				forks_url: 'https://api.github.com/repos/uiwwsw/cl/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/cl/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/cl/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/cl/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/cl/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/cl/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/cl/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/cl/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/cl/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/cl/tags',
				blobs_url: 'https://api.github.com/repos/uiwwsw/cl/git/blobs{/sha}',
				git_tags_url: 'https://api.github.com/repos/uiwwsw/cl/git/tags{/sha}',
				git_refs_url: 'https://api.github.com/repos/uiwwsw/cl/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/uiwwsw/cl/git/trees{/sha}',
				statuses_url: 'https://api.github.com/repos/uiwwsw/cl/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/uiwwsw/cl/languages',
				stargazers_url: 'https://api.github.com/repos/uiwwsw/cl/stargazers',
				contributors_url: 'https://api.github.com/repos/uiwwsw/cl/contributors',
				subscribers_url: 'https://api.github.com/repos/uiwwsw/cl/subscribers',
				subscription_url: 'https://api.github.com/repos/uiwwsw/cl/subscription',
				commits_url: 'https://api.github.com/repos/uiwwsw/cl/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/cl/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/cl/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/cl/issues/comments{/number}',
				contents_url: 'https://api.github.com/repos/uiwwsw/cl/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/cl/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/cl/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/cl/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/uiwwsw/cl/downloads',
				issues_url: 'https://api.github.com/repos/uiwwsw/cl/issues{/number}',
				pulls_url: 'https://api.github.com/repos/uiwwsw/cl/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/cl/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/cl/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/uiwwsw/cl/labels{/name}',
				releases_url: 'https://api.github.com/repos/uiwwsw/cl/releases{/id}',
				deployments_url: 'https://api.github.com/repos/uiwwsw/cl/deployments',
				created_at: '2020-02-15T03:11:09Z',
				updated_at: '2022-06-29T02:48:17Z',
				pushed_at: '2020-02-20T23:27:19Z',
				git_url: 'git://github.com/uiwwsw/cl.git',
				ssh_url: 'git@github.com:uiwwsw/cl.git',
				clone_url: 'https://github.com/uiwwsw/cl.git',
				svn_url: 'https://github.com/uiwwsw/cl',
				homepage: null,
				size: 232,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'Vue',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: null,
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 401328150,
				node_id: 'MDEwOlJlcG9zaXRvcnk0MDEzMjgxNTA=',
				name: 'criminal-wiki',
				full_name: 'uiwwsw/criminal-wiki',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/criminal-wiki',
				description: '범죄의 기록',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/criminal-wiki',
				forks_url: 'https://api.github.com/repos/uiwwsw/criminal-wiki/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/criminal-wiki/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/criminal-wiki/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/criminal-wiki/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/criminal-wiki/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/criminal-wiki/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/criminal-wiki/deployments',
				created_at: '2021-08-30T12:02:15Z',
				updated_at: '2022-06-29T02:47:39Z',
				pushed_at: '2021-11-01T13:13:19Z',
				git_url: 'git://github.com/uiwwsw/criminal-wiki.git',
				ssh_url: 'git@github.com:uiwwsw/criminal-wiki.git',
				clone_url: 'https://github.com/uiwwsw/criminal-wiki.git',
				svn_url: 'https://github.com/uiwwsw/criminal-wiki',
				homepage: null,
				size: 564,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: null,
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'main',
			},
			{
				id: 200824861,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMDA4MjQ4NjE=',
				name: 'easy-select',
				full_name: 'uiwwsw/easy-select',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/easy-select',
				description: 'Plugin to convert select tag to custom select',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/easy-select',
				forks_url: 'https://api.github.com/repos/uiwwsw/easy-select/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/easy-select/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/easy-select/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/easy-select/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/easy-select/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/easy-select/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/easy-select/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/easy-select/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/easy-select/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/easy-select/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/easy-select/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/easy-select/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/easy-select/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/easy-select/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/easy-select/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/easy-select/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/easy-select/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/easy-select/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/easy-select/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/easy-select/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/easy-select/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/easy-select/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/easy-select/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/easy-select/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/easy-select/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/easy-select/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/easy-select/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/easy-select/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/easy-select/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/easy-select/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/easy-select/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/easy-select/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/easy-select/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/easy-select/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/easy-select/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/easy-select/deployments',
				created_at: '2019-08-06T09:57:20Z',
				updated_at: '2019-10-11T00:29:34Z',
				pushed_at: '2019-10-11T00:29:32Z',
				git_url: 'git://github.com/uiwwsw/easy-select.git',
				ssh_url: 'git@github.com:uiwwsw/easy-select.git',
				clone_url: 'https://github.com/uiwwsw/easy-select.git',
				svn_url: 'https://github.com/uiwwsw/easy-select',
				homepage: '',
				size: 9110,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 2,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 2,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 269281502,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNjkyODE1MDI=',
				name: 'examples',
				full_name: 'uiwwsw/examples',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/examples',
				description:
					'Serverless Examples – A collection of boilerplates and examples of serverless architectures built with the Serverless Framework on AWS Lambda, Microsoft Azure, Google Cloud Functions, and more.',
				fork: true,
				url: 'https://api.github.com/repos/uiwwsw/examples',
				forks_url: 'https://api.github.com/repos/uiwwsw/examples/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/examples/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/examples/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/examples/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/examples/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/examples/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/examples/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/examples/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/examples/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/examples/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/examples/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/examples/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/examples/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/examples/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/examples/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/uiwwsw/examples/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/examples/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/examples/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/examples/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/examples/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/examples/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/examples/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/examples/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/examples/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/examples/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/examples/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/examples/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/examples/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/uiwwsw/examples/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/examples/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/examples/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/examples/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/examples/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/examples/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/examples/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/examples/deployments',
				created_at: '2020-06-04T06:44:57Z',
				updated_at: '2020-06-04T06:44:58Z',
				pushed_at: '2020-06-02T14:38:19Z',
				git_url: 'git://github.com/uiwwsw/examples.git',
				ssh_url: 'git@github.com:uiwwsw/examples.git',
				clone_url: 'https://github.com/uiwwsw/examples.git',
				svn_url: 'https://github.com/uiwwsw/examples',
				homepage: 'https://www.serverless.com/examples/',
				size: 11172,
				stargazers_count: 0,
				watchers_count: 0,
				language: null,
				has_issues: false,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'other',
					name: 'Other',
					spdx_id: 'NOASSERTION',
					url: null,
					node_id: 'MDc6TGljZW5zZTA=',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 515802011,
				node_id: 'R_kgDOHr6Dmw',
				name: 'frontend-clean-architecture',
				full_name: 'uiwwsw/frontend-clean-architecture',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/frontend-clean-architecture',
				description:
					'React + TypeScript app built using clean architecture principles · 🧼 🏛 🍪',
				fork: true,
				url: 'https://api.github.com/repos/uiwwsw/frontend-clean-architecture',
				forks_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/teams',
				hooks_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/frontend-clean-architecture/deployments',
				created_at: '2022-07-20T02:07:45Z',
				updated_at: '2022-07-21T06:33:55Z',
				pushed_at: '2022-07-25T23:43:54Z',
				git_url: 'git://github.com/uiwwsw/frontend-clean-architecture.git',
				ssh_url: 'git@github.com:uiwwsw/frontend-clean-architecture.git',
				clone_url: 'https://github.com/uiwwsw/frontend-clean-architecture.git',
				svn_url: 'https://github.com/uiwwsw/frontend-clean-architecture',
				homepage: 'https://bespoyasov.me/blog/clean-architecture-on-frontend/',
				size: 1162,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: false,
				has_projects: true,
				has_downloads: true,
				has_wiki: false,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: null,
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 262513709,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNjI1MTM3MDk=',
				name: 'ionic',
				full_name: 'uiwwsw/ionic',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/ionic',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/ionic',
				forks_url: 'https://api.github.com/repos/uiwwsw/ionic/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/ionic/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/ionic/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/ionic/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/ionic/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/ionic/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/ionic/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/ionic/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/ionic/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/ionic/tags',
				blobs_url: 'https://api.github.com/repos/uiwwsw/ionic/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/ionic/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/ionic/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/uiwwsw/ionic/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/ionic/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/uiwwsw/ionic/languages',
				stargazers_url: 'https://api.github.com/repos/uiwwsw/ionic/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/ionic/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/ionic/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/ionic/subscription',
				commits_url: 'https://api.github.com/repos/uiwwsw/ionic/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/ionic/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/ionic/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/ionic/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/ionic/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/ionic/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/ionic/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/ionic/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/uiwwsw/ionic/downloads',
				issues_url: 'https://api.github.com/repos/uiwwsw/ionic/issues{/number}',
				pulls_url: 'https://api.github.com/repos/uiwwsw/ionic/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/ionic/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/ionic/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/uiwwsw/ionic/labels{/name}',
				releases_url: 'https://api.github.com/repos/uiwwsw/ionic/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/ionic/deployments',
				created_at: '2020-05-09T07:21:58Z',
				updated_at: '2020-05-09T07:22:02Z',
				pushed_at: '2020-05-09T07:22:00Z',
				git_url: 'git://github.com/uiwwsw/ionic.git',
				ssh_url: 'git@github.com:uiwwsw/ionic.git',
				clone_url: 'https://github.com/uiwwsw/ionic.git',
				svn_url: 'https://github.com/uiwwsw/ionic',
				homepage: null,
				size: 2,
				stargazers_count: 0,
				watchers_count: 0,
				language: null,
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 313548156,
				node_id: 'MDEwOlJlcG9zaXRvcnkzMTM1NDgxNTY=',
				name: 'make-wire',
				full_name: 'uiwwsw/make-wire',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/make-wire',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/make-wire',
				forks_url: 'https://api.github.com/repos/uiwwsw/make-wire/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/make-wire/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/make-wire/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/make-wire/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/make-wire/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/make-wire/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/make-wire/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/make-wire/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/make-wire/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/make-wire/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/make-wire/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/make-wire/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/make-wire/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/make-wire/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/make-wire/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/make-wire/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/make-wire/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/make-wire/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/make-wire/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/make-wire/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/make-wire/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/make-wire/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/make-wire/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/make-wire/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/make-wire/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/make-wire/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/make-wire/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/make-wire/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/make-wire/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/make-wire/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/make-wire/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/make-wire/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/make-wire/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/make-wire/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/make-wire/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/make-wire/deployments',
				created_at: '2020-11-17T08:02:38Z',
				updated_at: '2022-02-14T04:58:25Z',
				pushed_at: '2022-02-14T05:00:38Z',
				git_url: 'git://github.com/uiwwsw/make-wire.git',
				ssh_url: 'git@github.com:uiwwsw/make-wire.git',
				clone_url: 'https://github.com/uiwwsw/make-wire.git',
				svn_url: 'https://github.com/uiwwsw/make-wire',
				homepage: null,
				size: 1392,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'Vue',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'main',
			},
			{
				id: 434418291,
				node_id: 'R_kgDOGeSycw',
				name: 'markdown-to-html-github-style',
				full_name: 'uiwwsw/markdown-to-html-github-style',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/markdown-to-html-github-style',
				description:
					"Generate a simple HTML page based on a markdown file, that looks like GitHub's stylesheet",
				fork: true,
				url: 'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style',
				forks_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/teams',
				hooks_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/markdown-to-html-github-style/deployments',
				created_at: '2021-12-03T00:34:57Z',
				updated_at: '2021-12-03T00:34:58Z',
				pushed_at: '2021-03-30T18:30:52Z',
				git_url: 'git://github.com/uiwwsw/markdown-to-html-github-style.git',
				ssh_url: 'git@github.com:uiwwsw/markdown-to-html-github-style.git',
				clone_url:
					'https://github.com/uiwwsw/markdown-to-html-github-style.git',
				svn_url: 'https://github.com/uiwwsw/markdown-to-html-github-style',
				homepage: 'https://markdown-to-github-style-web.com/',
				size: 1046,
				stargazers_count: 0,
				watchers_count: 0,
				language: null,
				has_issues: false,
				has_projects: true,
				has_downloads: true,
				has_wiki: false,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 435486968,
				node_id: 'R_kgDOGfUA-A',
				name: 'markup',
				full_name: 'uiwwsw/markup',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/markup',
				description:
					'Determines which markup library to use to render a content file (e.g. README) on GitHub',
				fork: true,
				url: 'https://api.github.com/repos/uiwwsw/markup',
				forks_url: 'https://api.github.com/repos/uiwwsw/markup/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/markup/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/markup/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/markup/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/markup/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/markup/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/markup/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/markup/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/markup/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/markup/tags',
				blobs_url: 'https://api.github.com/repos/uiwwsw/markup/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/markup/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/markup/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/uiwwsw/markup/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/markup/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/uiwwsw/markup/languages',
				stargazers_url: 'https://api.github.com/repos/uiwwsw/markup/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/markup/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/markup/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/markup/subscription',
				commits_url: 'https://api.github.com/repos/uiwwsw/markup/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/markup/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/markup/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/markup/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/markup/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/markup/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/markup/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/markup/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/uiwwsw/markup/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/markup/issues{/number}',
				pulls_url: 'https://api.github.com/repos/uiwwsw/markup/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/markup/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/markup/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/uiwwsw/markup/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/markup/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/markup/deployments',
				created_at: '2021-12-06T12:24:55Z',
				updated_at: '2021-12-06T12:24:56Z',
				pushed_at: '2021-07-28T06:56:13Z',
				git_url: 'git://github.com/uiwwsw/markup.git',
				ssh_url: 'git@github.com:uiwwsw/markup.git',
				clone_url: 'https://github.com/uiwwsw/markup.git',
				svn_url: 'https://github.com/uiwwsw/markup',
				homepage: '',
				size: 614,
				stargazers_count: 0,
				watchers_count: 0,
				language: null,
				has_issues: false,
				has_projects: true,
				has_downloads: false,
				has_wiki: false,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 212236955,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMTIyMzY5NTU=',
				name: 'modoo-moim',
				full_name: 'uiwwsw/modoo-moim',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/modoo-moim',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/modoo-moim',
				forks_url: 'https://api.github.com/repos/uiwwsw/modoo-moim/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/modoo-moim/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/modoo-moim/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/modoo-moim/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/modoo-moim/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/modoo-moim/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/modoo-moim/deployments',
				created_at: '2019-10-02T02:04:09Z',
				updated_at: '2022-06-29T02:49:19Z',
				pushed_at: '2022-07-20T15:40:41Z',
				git_url: 'git://github.com/uiwwsw/modoo-moim.git',
				ssh_url: 'git@github.com:uiwwsw/modoo-moim.git',
				clone_url: 'https://github.com/uiwwsw/modoo-moim.git',
				svn_url: 'https://github.com/uiwwsw/modoo-moim',
				homepage: null,
				size: 1551,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'Vue',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 22,
				license: null,
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 22,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 210496814,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMTA0OTY4MTQ=',
				name: 'modoomoim',
				full_name: 'uiwwsw/modoomoim',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/modoomoim',
				description: '모두모임',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/modoomoim',
				forks_url: 'https://api.github.com/repos/uiwwsw/modoomoim/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/modoomoim/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/modoomoim/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/modoomoim/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/modoomoim/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/modoomoim/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/modoomoim/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/modoomoim/deployments',
				created_at: '2019-09-24T02:44:54Z',
				updated_at: '2022-06-29T02:48:57Z',
				pushed_at: '2019-11-16T07:37:15Z',
				git_url: 'git://github.com/uiwwsw/modoomoim.git',
				ssh_url: 'git@github.com:uiwwsw/modoomoim.git',
				clone_url: 'https://github.com/uiwwsw/modoomoim.git',
				svn_url: 'https://github.com/uiwwsw/modoomoim',
				homepage: null,
				size: 53133,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: null,
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 217036173,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMTcwMzYxNzM=',
				name: 'modoomoim-hosting',
				full_name: 'uiwwsw/modoomoim-hosting',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/modoomoim-hosting',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/modoomoim-hosting',
				forks_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/teams',
				hooks_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/modoomoim-hosting/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/modoomoim-hosting/deployments',
				created_at: '2019-10-23T11:02:23Z',
				updated_at: '2022-06-29T02:49:08Z',
				pushed_at: '2019-10-27T11:05:35Z',
				git_url: 'git://github.com/uiwwsw/modoomoim-hosting.git',
				ssh_url: 'git@github.com:uiwwsw/modoomoim-hosting.git',
				clone_url: 'https://github.com/uiwwsw/modoomoim-hosting.git',
				svn_url: 'https://github.com/uiwwsw/modoomoim-hosting',
				homepage: null,
				size: 10,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'JavaScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 470115794,
				node_id: 'R_kgDOHAVl0g',
				name: 'moving-house',
				full_name: 'uiwwsw/moving-house',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/moving-house',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/moving-house',
				forks_url: 'https://api.github.com/repos/uiwwsw/moving-house/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/moving-house/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/moving-house/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/moving-house/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/moving-house/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/moving-house/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/moving-house/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/moving-house/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/moving-house/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/moving-house/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/moving-house/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/moving-house/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/moving-house/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/moving-house/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/moving-house/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/moving-house/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/moving-house/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/moving-house/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/moving-house/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/moving-house/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/moving-house/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/moving-house/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/moving-house/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/moving-house/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/moving-house/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/moving-house/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/moving-house/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/moving-house/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/moving-house/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/moving-house/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/moving-house/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/moving-house/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/moving-house/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/moving-house/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/moving-house/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/moving-house/deployments',
				created_at: '2022-03-15T10:48:02Z',
				updated_at: '2022-06-29T02:44:18Z',
				pushed_at: '2022-05-14T07:40:53Z',
				git_url: 'git://github.com/uiwwsw/moving-house.git',
				ssh_url: 'git@github.com:uiwwsw/moving-house.git',
				clone_url: 'https://github.com/uiwwsw/moving-house.git',
				svn_url: 'https://github.com/uiwwsw/moving-house',
				homepage: null,
				size: 747,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: null,
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'main',
			},
			{
				id: 307012259,
				node_id: 'MDEwOlJlcG9zaXRvcnkzMDcwMTIyNTk=',
				name: 'real-money',
				full_name: 'uiwwsw/real-money',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/real-money',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/real-money',
				forks_url: 'https://api.github.com/repos/uiwwsw/real-money/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/real-money/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/real-money/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/real-money/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/real-money/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/real-money/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/real-money/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/real-money/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/real-money/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/real-money/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/real-money/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/real-money/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/real-money/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/real-money/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/real-money/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/real-money/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/real-money/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/real-money/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/real-money/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/real-money/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/real-money/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/real-money/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/real-money/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/real-money/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/real-money/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/real-money/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/real-money/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/real-money/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/real-money/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/real-money/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/real-money/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/real-money/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/real-money/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/real-money/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/real-money/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/real-money/deployments',
				created_at: '2020-10-25T02:48:52Z',
				updated_at: '2022-06-29T02:47:52Z',
				pushed_at: '2020-11-16T00:46:31Z',
				git_url: 'git://github.com/uiwwsw/real-money.git',
				ssh_url: 'git@github.com:uiwwsw/real-money.git',
				clone_url: 'https://github.com/uiwwsw/real-money.git',
				svn_url: 'https://github.com/uiwwsw/real-money',
				homepage: null,
				size: 454,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'main',
			},
			{
				id: 234699058,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMzQ2OTkwNTg=',
				name: 'resume',
				full_name: 'uiwwsw/resume',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/resume',
				description: '프론트엔드개발자 ',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/resume',
				forks_url: 'https://api.github.com/repos/uiwwsw/resume/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/resume/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/resume/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/resume/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/resume/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/resume/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/resume/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/resume/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/resume/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/resume/tags',
				blobs_url: 'https://api.github.com/repos/uiwwsw/resume/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/resume/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/resume/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/uiwwsw/resume/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/resume/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/uiwwsw/resume/languages',
				stargazers_url: 'https://api.github.com/repos/uiwwsw/resume/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/resume/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/resume/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/resume/subscription',
				commits_url: 'https://api.github.com/repos/uiwwsw/resume/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/resume/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/resume/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/resume/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/resume/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/resume/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/resume/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/resume/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/uiwwsw/resume/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/resume/issues{/number}',
				pulls_url: 'https://api.github.com/repos/uiwwsw/resume/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/resume/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/resume/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/uiwwsw/resume/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/resume/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/resume/deployments',
				created_at: '2020-01-18T07:37:38Z',
				updated_at: '2022-06-29T02:48:26Z',
				pushed_at: '2020-01-19T06:01:08Z',
				git_url: 'git://github.com/uiwwsw/resume.git',
				ssh_url: 'git@github.com:uiwwsw/resume.git',
				clone_url: 'https://github.com/uiwwsw/resume.git',
				svn_url: 'https://github.com/uiwwsw/resume',
				homepage: null,
				size: 263,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'JavaScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 229248152,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMjkyNDgxNTI=',
				name: 'size-by-size',
				full_name: 'uiwwsw/size-by-size',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/size-by-size',
				description: '싸이즈 바이 싸이즈',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/size-by-size',
				forks_url: 'https://api.github.com/repos/uiwwsw/size-by-size/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/size-by-size/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/size-by-size/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/size-by-size/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/size-by-size/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/size-by-size/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/size-by-size/deployments',
				created_at: '2019-12-20T10:56:45Z',
				updated_at: '2022-06-29T02:48:36Z',
				pushed_at: '2020-01-14T10:43:05Z',
				git_url: 'git://github.com/uiwwsw/size-by-size.git',
				ssh_url: 'git@github.com:uiwwsw/size-by-size.git',
				clone_url: 'https://github.com/uiwwsw/size-by-size.git',
				svn_url: 'https://github.com/uiwwsw/size-by-size',
				homepage: null,
				size: 1096,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'Vue',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 244344909,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNDQzNDQ5MDk=',
				name: 'suitscar',
				full_name: 'uiwwsw/suitscar',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/suitscar',
				description: '나에게 딱 어울리는 자동차, 나딱알자',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/suitscar',
				forks_url: 'https://api.github.com/repos/uiwwsw/suitscar/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/suitscar/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/suitscar/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/suitscar/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/suitscar/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/suitscar/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/suitscar/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/suitscar/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/suitscar/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/suitscar/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/suitscar/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/suitscar/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/suitscar/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/suitscar/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/suitscar/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/uiwwsw/suitscar/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/suitscar/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/suitscar/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/suitscar/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/suitscar/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/suitscar/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/suitscar/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/suitscar/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/suitscar/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/suitscar/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/suitscar/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/suitscar/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/suitscar/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/uiwwsw/suitscar/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/suitscar/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/suitscar/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/suitscar/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/suitscar/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/suitscar/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/suitscar/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/suitscar/deployments',
				created_at: '2020-03-02T10:39:51Z',
				updated_at: '2022-06-29T02:48:05Z',
				pushed_at: '2020-03-23T10:48:40Z',
				git_url: 'git://github.com/uiwwsw/suitscar.git',
				ssh_url: 'git@github.com:uiwwsw/suitscar.git',
				clone_url: 'https://github.com/uiwwsw/suitscar.git',
				svn_url: 'https://github.com/uiwwsw/suitscar',
				homepage: null,
				size: 356,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'Vue',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 524307325,
				node_id: 'R_kgDOH0BLfQ',
				name: 'uiwwsw',
				full_name: 'uiwwsw/uiwwsw',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/uiwwsw',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/uiwwsw',
				forks_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/tags',
				blobs_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/languages',
				stargazers_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/subscription',
				commits_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/issues{/number}',
				pulls_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/uiwwsw/uiwwsw/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/uiwwsw/deployments',
				created_at: '2022-08-13T05:12:14Z',
				updated_at: '2022-08-14T08:37:08Z',
				pushed_at: '2022-09-10T06:27:51Z',
				git_url: 'git://github.com/uiwwsw/uiwwsw.git',
				ssh_url: 'git@github.com:uiwwsw/uiwwsw.git',
				clone_url: 'https://github.com/uiwwsw/uiwwsw.git',
				svn_url: 'https://github.com/uiwwsw/uiwwsw',
				homepage: null,
				size: 2535,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'main',
			},
			{
				id: 203977097,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMDM5NzcwOTc=',
				name: 'ux-carousel',
				full_name: 'uiwwsw/ux-carousel',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/ux-carousel',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/ux-carousel',
				forks_url: 'https://api.github.com/repos/uiwwsw/ux-carousel/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/ux-carousel/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/ux-carousel/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/ux-carousel/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/ux-carousel/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/ux-carousel/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/ux-carousel/deployments',
				created_at: '2019-08-23T10:25:45Z',
				updated_at: '2020-01-20T00:15:28Z',
				pushed_at: '2019-11-05T03:33:14Z',
				git_url: 'git://github.com/uiwwsw/ux-carousel.git',
				ssh_url: 'git@github.com:uiwwsw/ux-carousel.git',
				clone_url: 'https://github.com/uiwwsw/ux-carousel.git',
				svn_url: 'https://github.com/uiwwsw/ux-carousel',
				homepage: null,
				size: 1020,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 1,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: ['carousel', 'javascript', 'typescript'],
				visibility: 'public',
				forks: 0,
				open_issues: 1,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 439751888,
				node_id: 'R_kgDOGjYU0A',
				name: 'ux-components',
				full_name: 'uiwwsw/ux-components',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/ux-components',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/ux-components',
				forks_url: 'https://api.github.com/repos/uiwwsw/ux-components/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/ux-components/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/ux-components/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/ux-components/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/ux-components/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/ux-components/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/ux-components/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/ux-components/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/ux-components/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/ux-components/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/ux-components/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/ux-components/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/ux-components/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/ux-components/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/ux-components/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/ux-components/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/ux-components/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/ux-components/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/ux-components/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/ux-components/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/ux-components/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/ux-components/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/ux-components/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/ux-components/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/ux-components/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/ux-components/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/ux-components/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/ux-components/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/ux-components/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/ux-components/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/ux-components/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/ux-components/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/ux-components/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/ux-components/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/ux-components/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/ux-components/deployments',
				created_at: '2021-12-19T01:39:21Z',
				updated_at: '2022-06-29T02:47:29Z',
				pushed_at: '2022-01-04T11:20:41Z',
				git_url: 'git://github.com/uiwwsw/ux-components.git',
				ssh_url: 'git@github.com:uiwwsw/ux-components.git',
				clone_url: 'https://github.com/uiwwsw/ux-components.git',
				svn_url: 'https://github.com/uiwwsw/ux-components',
				homepage: null,
				size: 71,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'main',
			},
			{
				id: 204704369,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMDQ3MDQzNjk=',
				name: 'ux-dialog',
				full_name: 'uiwwsw/ux-dialog',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/ux-dialog',
				description: 'dialog, popup, typescript, javascript, es6',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/ux-dialog',
				forks_url: 'https://api.github.com/repos/uiwwsw/ux-dialog/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/ux-dialog/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/ux-dialog/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/ux-dialog/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/ux-dialog/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/ux-dialog/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/ux-dialog/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/ux-dialog/deployments',
				created_at: '2019-08-27T13:01:35Z',
				updated_at: '2020-02-24T06:58:35Z',
				pushed_at: '2020-02-24T06:57:49Z',
				git_url: 'git://github.com/uiwwsw/ux-dialog.git',
				ssh_url: 'git@github.com:uiwwsw/ux-dialog.git',
				clone_url: 'https://github.com/uiwwsw/ux-dialog.git',
				svn_url: 'https://github.com/uiwwsw/ux-dialog',
				homepage: '',
				size: 1434,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: ['dialog', 'javascript', 'popup', 'typescript'],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 233161151,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMzMxNjExNTE=',
				name: 'ux-hash',
				full_name: 'uiwwsw/ux-hash',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/ux-hash',
				description: 'Library to help you write hashtags in textarea',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/ux-hash',
				forks_url: 'https://api.github.com/repos/uiwwsw/ux-hash/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/ux-hash/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/ux-hash/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/ux-hash/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/ux-hash/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/ux-hash/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/uiwwsw/ux-hash/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/ux-hash/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/uiwwsw/ux-hash/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/issues{/number}',
				pulls_url: 'https://api.github.com/repos/uiwwsw/ux-hash/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/uiwwsw/ux-hash/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/ux-hash/deployments',
				created_at: '2020-01-11T01:55:18Z',
				updated_at: '2022-06-29T02:44:49Z',
				pushed_at: '2022-03-21T08:03:01Z',
				git_url: 'git://github.com/uiwwsw/ux-hash.git',
				ssh_url: 'git@github.com:uiwwsw/ux-hash.git',
				clone_url: 'https://github.com/uiwwsw/ux-hash.git',
				svn_url: 'https://github.com/uiwwsw/ux-hash',
				homepage: '',
				size: 6488,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 10,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: ['hash', 'javascript', 'mention', 'tag', 'typescript'],
				visibility: 'public',
				forks: 0,
				open_issues: 10,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 432353382,
				node_id: 'R_kgDOGcUwZg',
				name: 'ux-scroll',
				full_name: 'uiwwsw/ux-scroll',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/ux-scroll',
				description: 'apple scroll animation',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/ux-scroll',
				forks_url: 'https://api.github.com/repos/uiwwsw/ux-scroll/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/ux-scroll/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/ux-scroll/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/ux-scroll/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/ux-scroll/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/ux-scroll/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/ux-scroll/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/ux-scroll/deployments',
				created_at: '2021-11-27T02:56:48Z',
				updated_at: '2022-08-03T13:34:50Z',
				pushed_at: '2022-07-09T10:24:44Z',
				git_url: 'git://github.com/uiwwsw/ux-scroll.git',
				ssh_url: 'git@github.com:uiwwsw/ux-scroll.git',
				clone_url: 'https://github.com/uiwwsw/ux-scroll.git',
				svn_url: 'https://github.com/uiwwsw/ux-scroll',
				homepage: '',
				size: 595,
				stargazers_count: 1,
				watchers_count: 1,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 1,
				default_branch: 'master',
			},
			{
				id: 234293520,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMzQyOTM1MjA=',
				name: 'ux-ui',
				full_name: 'uiwwsw/ux-ui',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/ux-ui',
				description: 'capsule ui components',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/ux-ui',
				forks_url: 'https://api.github.com/repos/uiwwsw/ux-ui/forks',
				keys_url: 'https://api.github.com/repos/uiwwsw/ux-ui/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/ux-ui/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/ux-ui/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/ux-ui/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/ux-ui/tags',
				blobs_url: 'https://api.github.com/repos/uiwwsw/ux-ui/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/uiwwsw/ux-ui/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/uiwwsw/ux-ui/languages',
				stargazers_url: 'https://api.github.com/repos/uiwwsw/ux-ui/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/subscription',
				commits_url: 'https://api.github.com/repos/uiwwsw/ux-ui/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/ux-ui/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/uiwwsw/ux-ui/downloads',
				issues_url: 'https://api.github.com/repos/uiwwsw/ux-ui/issues{/number}',
				pulls_url: 'https://api.github.com/repos/uiwwsw/ux-ui/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/uiwwsw/ux-ui/labels{/name}',
				releases_url: 'https://api.github.com/repos/uiwwsw/ux-ui/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/ux-ui/deployments',
				created_at: '2020-01-16T10:21:00Z',
				updated_at: '2022-06-29T02:45:46Z',
				pushed_at: '2022-03-21T08:03:23Z',
				git_url: 'git://github.com/uiwwsw/ux-ui.git',
				ssh_url: 'git@github.com:uiwwsw/ux-ui.git',
				clone_url: 'https://github.com/uiwwsw/ux-ui.git',
				svn_url: 'https://github.com/uiwwsw/ux-ui',
				homepage: null,
				size: 2629,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 10,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: ['shadow-dom', 'shadowdom', 'ui-components', 'ux-ui'],
				visibility: 'public',
				forks: 0,
				open_issues: 10,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 443911792,
				node_id: 'R_kgDOGnWOcA',
				name: 'visual-novel',
				full_name: 'uiwwsw/visual-novel',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/visual-novel',
				description: 'visual-novel',
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/visual-novel',
				forks_url: 'https://api.github.com/repos/uiwwsw/visual-novel/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/visual-novel/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/visual-novel/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/visual-novel/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/visual-novel/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/visual-novel/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/visual-novel/deployments',
				created_at: '2022-01-03T01:41:36Z',
				updated_at: '2022-06-29T02:47:08Z',
				pushed_at: '2022-02-20T00:49:05Z',
				git_url: 'git://github.com/uiwwsw/visual-novel.git',
				ssh_url: 'git@github.com:uiwwsw/visual-novel.git',
				clone_url: 'https://github.com/uiwwsw/visual-novel.git',
				svn_url: 'https://github.com/uiwwsw/visual-novel',
				homepage: null,
				size: 117,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'main',
			},
			{
				id: 272637448,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNzI2Mzc0NDg=',
				name: 'vue-faq-accordion',
				full_name: 'uiwwsw/vue-faq-accordion',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/vue-faq-accordion',
				description:
					'❓ Simple and smooth Vue.js accordion component. Perfect for your FAQ section',
				fork: true,
				url: 'https://api.github.com/repos/uiwwsw/vue-faq-accordion',
				forks_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/teams',
				hooks_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/vue-faq-accordion/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/vue-faq-accordion/deployments',
				created_at: '2020-06-16T07:19:26Z',
				updated_at: '2020-06-16T07:19:28Z',
				pushed_at: '2020-06-16T07:28:16Z',
				git_url: 'git://github.com/uiwwsw/vue-faq-accordion.git',
				ssh_url: 'git@github.com:uiwwsw/vue-faq-accordion.git',
				clone_url: 'https://github.com/uiwwsw/vue-faq-accordion.git',
				svn_url: 'https://github.com/uiwwsw/vue-faq-accordion',
				homepage: 'https://www.npmjs.com/package/vue-faq-accordion',
				size: 1192,
				stargazers_count: 0,
				watchers_count: 0,
				language: null,
				has_issues: false,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 228572510,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMjg1NzI1MTA=',
				name: 'vue-maven-ui-components',
				full_name: 'uiwwsw/vue-maven-ui-components',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/vue-maven-ui-components',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/vue-maven-ui-components',
				forks_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/teams',
				hooks_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/vue-maven-ui-components/deployments',
				created_at: '2019-12-17T08:46:18Z',
				updated_at: '2022-06-29T02:48:48Z',
				pushed_at: '2020-01-02T08:28:45Z',
				git_url: 'git://github.com/uiwwsw/vue-maven-ui-components.git',
				ssh_url: 'git@github.com:uiwwsw/vue-maven-ui-components.git',
				clone_url: 'https://github.com/uiwwsw/vue-maven-ui-components.git',
				svn_url: 'https://github.com/uiwwsw/vue-maven-ui-components',
				homepage: null,
				size: 1903,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'Vue',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master',
			},
			{
				id: 200166769,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMDAxNjY3Njk=',
				name: 'vue-ui-slider',
				full_name: 'uiwwsw/vue-ui-slider',
				private: false,
				owner: {
					login: 'uiwwsw',
					id: 53593127,
					node_id: 'MDQ6VXNlcjUzNTkzMTI3',
					avatar_url: 'https://avatars.githubusercontent.com/u/53593127?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/uiwwsw',
					html_url: 'https://github.com/uiwwsw',
					followers_url: 'https://api.github.com/users/uiwwsw/followers',
					following_url:
						'https://api.github.com/users/uiwwsw/following{/other_user}',
					gists_url: 'https://api.github.com/users/uiwwsw/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/uiwwsw/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/uiwwsw/subscriptions',
					organizations_url: 'https://api.github.com/users/uiwwsw/orgs',
					repos_url: 'https://api.github.com/users/uiwwsw/repos',
					events_url: 'https://api.github.com/users/uiwwsw/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/uiwwsw/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/uiwwsw/vue-ui-slider',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/uiwwsw/vue-ui-slider',
				forks_url: 'https://api.github.com/repos/uiwwsw/vue-ui-slider/forks',
				keys_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/uiwwsw/vue-ui-slider/teams',
				hooks_url: 'https://api.github.com/repos/uiwwsw/vue-ui-slider/hooks',
				issue_events_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/issues/events{/number}',
				events_url: 'https://api.github.com/repos/uiwwsw/vue-ui-slider/events',
				assignees_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/branches{/branch}',
				tags_url: 'https://api.github.com/repos/uiwwsw/vue-ui-slider/tags',
				blobs_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/languages',
				stargazers_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/stargazers',
				contributors_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/contributors',
				subscribers_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/subscribers',
				subscription_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/subscription',
				commits_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/uiwwsw/vue-ui-slider/merges',
				archive_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/downloads',
				issues_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/labels{/name}',
				releases_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/uiwwsw/vue-ui-slider/deployments',
				created_at: '2019-08-02T04:45:26Z',
				updated_at: '2022-06-29T02:47:18Z',
				pushed_at: '2022-07-20T12:38:16Z',
				git_url: 'git://github.com/uiwwsw/vue-ui-slider.git',
				ssh_url: 'git@github.com:uiwwsw/vue-ui-slider.git',
				clone_url: 'https://github.com/uiwwsw/vue-ui-slider.git',
				svn_url: 'https://github.com/uiwwsw/vue-ui-slider',
				homepage: null,
				size: 1653,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'Vue',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 16,
				license: {
					key: 'mit',
					name: 'MIT License',
					spdx_id: 'MIT',
					url: 'https://api.github.com/licenses/mit',
					node_id: 'MDc6TGljZW5zZTEz',
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 16,
				watchers: 0,
				default_branch: 'master',
			},
		];
		return convertGithubReposToPortfolios(githubRepos);
	}
	fetchWeather(): Promise<Weather> {
		const openweathermap = new OpenWeatherMap({
			apiKey: 'd5d1fbb0ae319cd00ea307d004a9589b',
			language: 'kr',
			units: 'metric',
		});
		return openweathermap.getCurrentWeatherByCityName({ cityName: 'seoul' });
	}
}
