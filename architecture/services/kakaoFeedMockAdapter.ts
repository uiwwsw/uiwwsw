import { KakaoFeedService } from "@/application/ports";
import { KakaoStoryFeed } from "@/domain/essay";

export function useKakaoFeed(): KakaoFeedService {
  return {
    async fetchData(): Promise<KakaoStoryFeed[]> {
      const feeds = [
        {
          id: "_aVW4Z8.EKj7L6WbE5A",
          url: "https://story.kakao.com/_aVW4Z8/EKj7L6WbE5A",
          media_type: "NOTE",
          created_at: "2022-08-09T01:47:07Z",
          content:
            "사람의 실수를 이해하려 노력하자.\n모두가 잘할 수 없어.\n실수하면 실수한거구나\n그걸로 이해하고 넘어가주는\n나는 못받았어도 베풀 수 있는 사람이 되길",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
        {
          id: "_aVW4Z8.eI4V4ZQGd5A",
          url: "https://story.kakao.com/_aVW4Z8/eI4V4ZQGd5A",
          media_type: "NOTE",
          created_at: "2022-08-08T12:58:56Z",
          content:
            "의사소통이 참 중요하다.\n누가 말을 하면 듣는 척을 해야한다.\n\n그래서 다들 듣는 척만 하나보다.\n걱정되서 연락했다니까\n12시에 일정있으니 문제없담말을 두번씩 한다.\n\n어이없",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
        {
          id: "_aVW4Z8.3IeZDm8Ta39",
          url: "https://story.kakao.com/_aVW4Z8/3IeZDm8Ta39",
          media_type: "NOTE",
          created_at: "2022-08-06T07:53:15Z",
          content:
            "감정은 당근이 아니다.\n\n그래서 내 것이 진짜라도\n남의 것은 가짜일 수 있다.\n\n아무리 값 비싼걸 주더라도\n싸구려를 돌려 받아도 그러려니, 어쩔 수 없다.",
          comment_count: 0,
          like_count: 0,
          permission: "PUBLIC",
        },
        {
          id: "_aVW4Z8.DJQr7Sutb5A",
          url: "https://story.kakao.com/_aVW4Z8/DJQr7Sutb5A",
          media_type: "NOTE",
          created_at: "2022-08-06T07:48:38Z",
          content: "기대와 실망 사이 어딘가",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
        {
          id: "_aVW4Z8.5EtaiTGY939",
          url: "https://story.kakao.com/_aVW4Z8/5EtaiTGY939",
          media_type: "NOTE",
          created_at: "2022-08-04T13:34:28Z",
          content:
            "지루하다는건\n내 위치를 제대로 모르거나\n세상이 만만해서가 아닐까",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
        {
          id: "_aVW4Z8.a1uI9LQs740",
          url: "https://story.kakao.com/_aVW4Z8/a1uI9LQs740",
          media_type: "NOTE",
          created_at: "2022-08-02T13:58:43Z",
          content:
            "골머리를 앓는 문제는 \n내가 해결할 수 없을 때 발생한다.\n\n그러니까 키를 쥔 사람이 나일 땐\n지지든 볶든 알아서 할 수 있고 그래서 걱정거리가 아니지만, 그 반대일 경우 우리는 해결하기 전까지 걱정이란 걸 한다.\n\n근데 이 걱정은 무쓸모다.\n걱정하는 동안 획기적인 방법이 떠오르지도 않고\n더군다나 그 문제는 우리가 획기적인 방법을 찾는 속도보다 빨리 커져서 시간이 갈수록 사실상 분리하다.\n\n그래서 빨리 내가 키를 쥐는 게 중요하다.\n이 말은 무엇이냐, 저지르는 것이다.\n\n뭣이 됐든 저지르고 나면\n우리에게 키가 돌아온다.\n\n그리고 나면 이제 차분히 걱정하면 된다.\n내 처신이 부족했다면 내가 성장하면 되고\n그 사람의 처신이 부족했다면 다시 한 번 대화를 해보면 되고, 뭐든 간에 이제 다음 해결책을 느긋이 걱정해도 괜찮은, 시간의 키를 내가 쥐게 된다.\n\n전자라도 크게 실망하지 않아도 된다.\n우린 그만큼 성장한 것일 테니까.",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
        {
          id: "_aVW4Z8.kB9v69smy5a",
          url: "https://story.kakao.com/_aVW4Z8/kB9v69smy5a",
          media_type: "NOTE",
          created_at: "2022-07-26T14:25:34Z",
          content:
            "불만이 있으면 양 볼에 바람을 불어넣는 버릇이 있다. 서른이 된 지금 내 볼이 더는 부풀지 않지만, 누구든지 내 기분을 알 수 있는 건 여전하다고들 하더라. 세 살 버릇 어디 가겠나. \n\n정확히 몇 살이었는진 모르지만, 토실했던 난 양 볼에 바람을 있는 힘껏 넣고는 뱉어내며 신세 한탄을 했다. “푸룩”하는 바람 빠지는 소리와 함께 나온 단어들은 이해하기 어려울 만큼 작은 소리의 뭉게어진 것이었지만 선명한 몇 가지 단어들 덕분에 그 뜻은 쉽게 추측할 수 있었다. 그건 어른이 되고자 하는 어린이의 소망이었다.\n\n볼록한 볼이 궁금했던 주변 어른들은 내게 다가와 무슨 일인지 물어보고는 각자의 경험담을 처방하여 날 안심시키려 했다.\n\n하지만 난 꾀 오랫동안 어른이 되는 걸 믿지 않았다. 절대 일어나지 않을 것 같았고 나이가 든 내 모습을 상상도 할 수 없었다.\n\n그래서 샐 수 없이 소망했다. 오늘보다 빠른 내일이 되길, 밤마다 빌었다.\n\n그러다 마침내 찾아온 20대는 어떻게 갔는지 모를 만큼 정신없이 지나갔고, 30대가 되니 이제 정신 좀 차릴 것 같은데, 문제는 시간의 속도다. \n\n눈깜짝하면 일년이 가 버린다.\n\n소원이 지금에서야 이뤄진 것 같다.",
          comment_count: 0,
          like_count: 0,
          permission: "PUBLIC",
        },
        {
          id: "_aVW4Z8.dQjsVKgMY4A",
          url: "https://story.kakao.com/_aVW4Z8/dQjsVKgMY4A",
          media_type: "NOTE",
          created_at: "2022-07-26T14:20:17Z",
          content:
            "나이가 든다는 건,\n세상의 중심이 내가 아니란 걸 깨닫는 것이다.\n\n자신이 고작 조연도 안된다는걸 깨닫고 받아들이는데까지 사람마다 다 다른 시간이 필요한데, 난 30년정도, 이렇게나 많은 시간이 필요했나 싶다.\n\n매일 슬펐고 이유없이 좌절했다. 그 슬픔이 끝나지 않을것만 같았다.\n\n지금 생각해보면 답은 아주 오래전부터 곁에 있었다. 내가 외면하고 있었을 뿐이다. 그 답이 틀리지 않다는건 알고 있었지만, 그래도 내 경우는 다를 수 있다고 마음 속 깊이 기적을 바라고 있었던것 같다. 그 믿음을 깨는데 서른이라는 무게감이 필요했다.",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
        {
          id: "_aVW4Z8.cDJ5y0dlx30",
          url: "https://story.kakao.com/_aVW4Z8/cDJ5y0dlx30",
          media_type: "NOTE",
          created_at: "2022-07-26T14:19:03Z",
          content:
            "안개 때문에 제 속도를 내지 못하는 버스, 그곳의 승객들은 평소와 다른 속도를 파악하기 위해 정면을 주시했다. 누구는 목을 빼서 이리저리 둘러봤고 또 누구는 자리에서 일어서기까지 했다. 어찌 보면 당연한 행동 같다. 하지만 보일 땐 보지 않고 보이지 않을 때만 보려고 노력하는 게 우리 삶과 비슷해 안타까웠다.\n매번 보이지 않을 때만 정면을 보며, 보이지 않는다고 말하고 있는 건 아닌가 싶었다.",
          comment_count: 0,
          like_count: 0,
          permission: "PUBLIC",
        },
        {
          id: "_aVW4Z8.GIoTWNcLY4A",
          url: "https://story.kakao.com/_aVW4Z8/GIoTWNcLY4A",
          media_type: "NOTE",
          created_at: "2022-07-26T13:49:33Z",
          content:
            "떠올리지 않아도 당신이 그려졌던 때가 있었다. 그땐 당신에 대해 이야기할 때조차, 당신을 떠올릴 필요가 없었다. 그냥 입을 열면 당신의 말투, 당신의 존재가 내게 빙의된 듯 이야기가 이어졌기 때문이다. 어쩌면 그땐 내 존재가 당신의 조각이었는지도 모르겠다.\n\n아주 오랜만에 난 당신에 대해 떠올려보았다. 정확히 하자면 떠올리려 노력했고 무엇 때문인지 모르겠지만 그러지 못했다. 오랜만이라 그런지 아니면 더는 당신을 걱정할 이유가 사라진 건지, 모르긴 해도 당신은 이제 내게 없나 보다.\n\n당신이 떠오르지 않는 건 헤어지고 4년 만의 일이다. 당신이 날 부르던 음성도 이젠 기억나지 않았다.\n\n그런데 떠올려본 행위는 마치 상처 위에 옅게 앉은 딱지를 떼어내는 것과 같았고 그 상처에선 피처럼, 남아있던 기억들이 뿜어져 나오기 시작했다.\n\n졸린 눈으로 준비해준 생일상과, 음식이 모두 다 식어버렸다며 억울함에 삐쭉내민 입술과, 차가워서 더 맛있다는 내 거짓말에 대답으로 건넨 너의 손편지가, 허공에 흩뿌려졌다.",
          comment_count: 0,
          like_count: 0,
          permission: "PUBLIC",
        },
        {
          id: "_aVW4Z8.jUicPYhLy5a",
          url: "https://story.kakao.com/_aVW4Z8/jUicPYhLy5a",
          media_type: "NOTE",
          created_at: "2022-07-26T13:37:17Z",
          content:
            "누군갈 사랑하는건 대단한 일이다. 어느 책에선 사랑은 운명이니 하는 따위가 아닌, 노력하면 언젠가 이뤄지는거라 했지만, 내 생각은 그렇지 않다.\n\n분명 그런 사랑도 있을 것이다. 퇴근길에 자주 듣는 박소현의 러브레터에서는 종종 이와 비슷한 사연들이 소개된다. 그 사연들은 한결같이, 오랜 노력이 상대의 마음을 얻을 수 있다 말한다. \n\n물론 노력이 나쁜것도, 틀린것도 아니다. 이 또한 사랑이며 대단한 일임에는 틀림없다. 다만, 내가 꿈꾸는 사랑이 이보다 조금 더 거창할 뿐이다.",
          comment_count: 0,
          like_count: 0,
          permission: "PUBLIC",
        },
        {
          id: "_aVW4Z8.fLI3tgYKY4A",
          url: "https://story.kakao.com/_aVW4Z8/fLI3tgYKY4A",
          media_type: "NOTE",
          created_at: "2022-07-26T13:30:38Z",
          content:
            "가을은, 타이밍을 고민하다 딱 알맞은 타이밍에 내 앞에 나타나 날 놀라킨다.\n\n오늘이 바로 그날이었다. \n평소 같은 아침 출근길에 난대 없는 어둠이 깔려 있었다. 이건 마치 퇴근 후 재출근하는 느낌마저 들었으며 또 하루키의 말처럼 같지만 다른 세상인 것 같기도 했다. 그렇게 가을은 내가 알던 세상을 온통 어둡게 만들어 버렸다. 아침 해로 밝던 하늘은 하루아침에 저녁노을처럼, 낮밤이 분간이 가지 않는 어중간한 어둠으로 변해 있었다.\n\n이제 퇴근할 때도 어둡겠지 하는 마음에 조금은 서글프기도 하다.",
          comment_count: 0,
          like_count: 0,
          permission: "PUBLIC",
        },
        {
          id: "_aVW4Z8.51PxXGOJX29",
          url: "https://story.kakao.com/_aVW4Z8/51PxXGOJX29",
          media_type: "NOTE",
          created_at: "2022-07-26T13:26:27Z",
          content:
            "연륜이라는건\n경험치를 뜻하는 것 같다.\n\n어떻게 해야 더 좋은지를 나타내는 것인데,\n삶의 규칙들이\n서로 충돌하며 틀어진다.\n\n뼈대만 남은 채 흐트러지고\n다시 그것들을 추스르고 살아간다.\n\n서른이라느 여린 어른",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
        {
          id: "_aVW4Z8.FPD2nG5OX4A",
          url: "https://story.kakao.com/_aVW4Z8/FPD2nG5OX4A",
          media_type: "NOTE",
          created_at: "2022-07-25T09:22:26Z",
          content:
            "망향휴게소라는 단어가 익숙하다 싶었는데 오해였다.\n\n내겐\n버스정류장에서 보이는 식당이름이고,\n별내 맛집 검색하면 나오는 이름일 뿐,\n실상의 망향휴게소와는 서로 모르는 사이다.",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
        {
          id: "_aVW4Z8.BMq8lcEIV30",
          url: "https://story.kakao.com/_aVW4Z8/BMq8lcEIV30",
          media_type: "NOTE",
          created_at: "2022-07-23T10:00:13Z",
          content:
            '자욱한 담배 연기는 싫다고 했다.\n\n"다행이다. 그것도 좋아했으면 널 다시 봤을 거야"\n\n또 해줘.\n\n나는 조심스레 담배 연기를 그녀의 얼굴에 뱉었다.\n\n또.\n\n다시 한 번 깊게 들이마시고. 목구멍부터 가슴 어딘가까지 느껴지는 뜨거움을 어느 정도 옅어지길 기다린 뒤, 그녀에게 조심스레 뱉어냈다. 또 가 멈출 때까지.',
          comment_count: 0,
          like_count: 0,
          permission: "PUBLIC",
        },
        {
          id: "_aVW4Z8.6DV0ejlHu29",
          url: "https://story.kakao.com/_aVW4Z8/6DV0ejlHu29",
          media_type: "NOTE",
          created_at: "2022-07-23T09:49:34Z",
          content:
            "평소에 보지 못하는 자연을 마주하면\n역시나 그렇듯 머리가 투명해진다.\n\n끝도 없이 펼쳐진 자연이 차원을 넘어와\n머리속을 가득 메우는 것 같다.",
          comment_count: 0,
          like_count: 0,
          permission: "PUBLIC",
        },
        {
          id: "_aVW4Z8.iZMDDgGiW5a",
          url: "https://story.kakao.com/_aVW4Z8/iZMDDgGiW5a",
          media_type: "NOTE",
          created_at: "2022-07-23T09:46:16Z",
          content:
            "기대치에 대해서\n\n사람에게 기대하는 기대치가 높다는것\n나의 성급함때문이라 생각했는데\n성급함이 전혀 없진 않겠지만 더한 원인이 생각났다.\n역지사지에서 오는 기본이 높은 것이다.\n\n실수 할 수 있다. 그러면 사과하면 되지 않나.\n나는 세상을 그렇게 살아왔다. 체면이고 뭐고 실수하면 사과하고 미안해하고.\n\n그런데 아닌가보다. 사과안해야 자기의 위치가 지켜지고 아닌척해야 자기의 권위가 수립되는가보다.\n\n그래서 그런것 같다",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
        {
          id: "_aVW4Z8.2Coqd3n9U29",
          url: "https://story.kakao.com/_aVW4Z8/2Coqd3n9U29",
          media_type: "NOTE",
          created_at: "2022-07-22T15:03:41Z",
          content:
            "기대치의 문제였구나. 나는 누군갈 이만큼은 하겠다고 생각하고 그게 깨지면 배신감을 느낀것 같다.\n역시 상황을 글로쓰면 너무 하찮아진다.",
          comment_count: 0,
          like_count: 0,
          permission: "ONLY_ME",
        },
      ];
      return new Promise((resolve) => setTimeout(() => resolve(feeds), 100));
    },
  };
}
