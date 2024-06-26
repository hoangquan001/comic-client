import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comic } from '../schema/comic';
import { Genre } from '../schema/Genre';

@Injectable({
  providedIn: 'root',
})
export class fetchComicService {
  listGenre: Array<Genre> = [
    {
      id: 1,
      title: 'Action',
      slug: 'action',
      description:
        'Th\u1ec3 lo\u1ea1i n\u00e0y th\u01b0\u1eddng c\u00f3 n\u1ed9i dung v\u1ec1 \u0111\u00e1nh nhau, b\u1ea1o l\u1ef1c, h\u1ed7n lo\u1ea1n, v\u1edbi di\u1ec5n bi\u1ebfn nhanh',
    },
    {
      id: 2,
      title: 'Adult',
      slug: 'adult',
      description:
        'Th\u1ec3 lo\u1ea1i c\u00f3 \u0111\u1ec1 c\u1eadp \u0111\u1ebfn v\u1ea5n \u0111\u1ec1 nh\u1ea1y c\u1ea3m, ch\u1ec9 d\u00e0nh cho tu\u1ed5i 17+',
    },
    {
      id: 3,
      title: 'Adventure',
      slug: 'adventure',
      description:
        'Th\u1ec3 lo\u1ea1i phi\u00eau l\u01b0u, m\u1ea1o hi\u1ec3m, th\u01b0\u1eddng l\u00e0 h\u00e0nh tr\u00ecnh c\u1ee7a c\u00e1c nh\u00e2n v\u1eadt',
    },
    {
      id: 4,
      title: 'Anime',
      slug: 'anime',
      description:
        'Truy\u1ec7n \u0111\u00e3 \u0111\u01b0\u1ee3c chuy\u1ec3n th\u1ec3 th\u00e0nh film Anime',
    },
    {
      id: 5,
      title: 'Chuy\u1ec3n Sinh',
      slug: 'chuyen-sinh',
      description:
        'Th\u1ec3 lo\u1ea1i n\u00e0y l\u00e0 nh\u1eefng c\u00e2u chuy\u1ec7n v\u1ec1 ng\u01b0\u1eddi \u1edf m\u1ed9t th\u1ebf gi\u1edbi n\u00e0y xuy\u00ean \u0111\u1ebfn m\u1ed9t th\u1ebf gi\u1edbi kh\u00e1c, c\u00f3 th\u1ec3 l\u00e0 th\u1ebf gi\u1edbi mang phong c\u00e1ch trung c\u1ed5 v\u1edbi ki\u1ebfm s\u0129 v\u00e0 ma thu\u1eadt, hay th\u1ebf gi\u1edbi trong game, ho\u1eb7c c\u00f3 th\u1ec3 l\u00e0 b\u1ea1n ch\u1ebft \u1edf n\u01a1i n\u00e0y v\u00e0 \u0111\u01b0\u1ee3c chuy\u1ec3n sinh \u0111\u1ebfn n\u01a1i kh\u00e1c',
    },
    {
      id: 6,
      title: 'Comedy',
      slug: 'comedy',
      description:
        'Th\u1ec3 lo\u1ea1i c\u00f3 n\u1ed9i dung trong s\u00e1ng v\u00e0 c\u1ea3m \u0111\u1ed9ng, th\u01b0\u1eddng c\u00f3 c\u00e1c t\u00ecnh ti\u1ebft g\u00e2y c\u01b0\u1eddi, c\u00e1c xung \u0111\u1ed9t nh\u1eb9 nh\u00e0ng',
    },
    {
      id: 7,
      title: 'Comic',
      slug: 'comic',
      description:
        'Truy\u1ec7n tranh Ch\u00e2u \u00c2u v\u00e0 Ch\u00e2u M\u0129',
    },
    {
      id: 8,
      title: 'Cooking',
      slug: 'cooking',
      description:
        'Th\u1ec3 lo\u1ea1i c\u00f3 n\u1ed9i dung v\u1ec1 n\u1ea5u \u0103n, \u1ea9m th\u1ef1c',
    },
    {
      id: 9,
      title: 'C\u1ed5 \u0110\u1ea1i',
      slug: 'co-dai',
      description:
        'Truy\u1ec7n c\u00f3 n\u1ed9i dung x\u1ea3y ra \u1edf th\u1eddi c\u1ed5 \u0111\u1ea1i phong ki\u1ebfn.',
    },
    {
      id: 10,
      title: 'Doujinshi',
      slug: 'doujinshi',
      description:
        'Th\u1ec3 lo\u1ea1i truy\u1ec7n ph\u00f3ng t\u00e1c do fan hay c\u00f3 th\u1ec3 c\u1ea3 nh\u1eefng Mangaka kh\u00e1c v\u1edbi t\u00e1c gi\u1ea3 truy\u1ec7n g\u1ed1c. T\u00e1c gi\u1ea3 v\u1ebd Doujinshi th\u01b0\u1eddng d\u1ef1a tr\u00ean nh\u1eefng nh\u00e2n v\u1eadt g\u1ed1c \u0111\u1ec3 vi\u1ebft ra nh\u1eefng c\u00e2u chuy\u1ec7n theo s\u1edf th\u00edch c\u1ee7a m\u00ecnh',
    },
    {
      id: 11,
      title: 'Drama',
      slug: 'drama',
      description:
        'Th\u1ec3 lo\u1ea1i mang \u0111\u1ebfn cho ng\u01b0\u1eddi xem nh\u1eefng c\u1ea3m x\u00fac kh\u00e1c nhau: bu\u1ed3n b\u00e3, c\u0103ng th\u1eb3ng th\u1eadm ch\u00ed l\u00e0 bi ph\u1eab',
    },
    {
      id: 12,
      title: '\u0110am M\u1ef9',
      slug: 'dam-my',
      description: 'Truy\u1ec7n t\u00ecnh c\u1ea3m gi\u1eefa nam v\u00e0 nam.',
    },
    {
      id: 13,
      title: 'Ecchi',
      slug: 'ecchi',
      description:
        'Th\u01b0\u1eddng c\u00f3 nh\u1eefng t\u00ecnh hu\u1ed1ng nh\u1ea1y c\u1ea3m nh\u1eb1m l\u00f4i cu\u1ed1n ng\u01b0\u1eddi xem',
    },
    {
      id: 14,
      title: 'Fantasy',
      slug: 'fantasy',
      description:
        'Th\u1ec3 lo\u1ea1i xu\u1ea5t ph\u00e1t t\u1eeb tr\u00ed t\u01b0\u1edfng t\u01b0\u1ee3ng phong ph\u00fa, t\u1eeb ph\u00e1p thu\u1eadt \u0111\u1ebfn th\u1ebf gi\u1edbi trong m\u01a1 th\u1eadm ch\u00ed l\u00e0 nh\u1eefng c\u00e2u chuy\u1ec7n th\u1ea7n ti\u00ea',
    },
    {
      id: 15,
      title: 'Gender Bender',
      slug: 'gender-bender',
      description:
        'L\u00e0 m\u1ed9t th\u1ec3 lo\u1ea1i trong \u0111\u00f3 gi\u1edbi t\u00ednh c\u1ee7a nh\u00e2n v\u1eadt b\u1ecb l\u1eabn l\u1ed9n: nam ho\u00e1 th\u00e0nh n\u1eef, n\u1eef h\u00f3a th\u00e0nh nam...',
    },
    {
      id: 16,
      title: 'Harem',
      slug: 'harem',
      description:
        'Th\u1ec3 lo\u1ea1i truy\u1ec7n t\u00ecnh c\u1ea3m, l\u00e3ng m\u1ea1n m\u00e0 trong \u0111\u00f3, nhi\u1ec1u nh\u00e2n v\u1eadt n\u1eef th\u00edch m\u1ed9t nam nh\u00e2n v\u1eadt ch\u00ednh',
    },
    {
      id: 17,
      title: 'Historical',
      slug: 'historical',
      description:
        'Th\u1ec3 lo\u1ea1i c\u00f3 li\u00ean quan \u0111\u1ebfn th\u1eddi xa x\u01b0a',
    },
    {
      id: 18,
      title: 'Horror',
      slug: 'horror',
      description:
        'Horror l\u00e0: r\u00f9ng r\u1ee3n, nghe c\u00e1i t\u00ean l\u00e0 b\u1ea1n \u0111\u00e3 hi\u1ec3u th\u1ec3 lo\u1ea1i n\u00e0y c\u00f3 n\u1ed9i dung th\u1ebf n\u00e0o. N\u00f3 l\u00e0m cho b\u1ea1n kinh h\u00e3i, khi\u1ebfp s\u1ee3, gh\u00ea t\u1edfm, run r\u1ea9y, c\u00f3 th\u1ec3 g\u00e2y sock - m\u1ed9t th\u1ec3 lo\u1ea1i kh\u00f4ng d\u00e0nh cho ng\u01b0\u1eddi y\u1ebfu tim',
    },
    {
      id: 19,
      title: 'Josei',
      slug: 'josei',
      description:
        'Th\u1ec3 lo\u1ea1i c\u1ee7a manga hay anime \u0111\u01b0\u1ee3c s\u00e1ng t\u00e1c ch\u1ee7 y\u1ebfu b\u1edfi ph\u1ee5 n\u1eef cho nh\u1eefng \u0111\u1ed9c gi\u1ea3 n\u1eef t\u1eeb 18 \u0111\u1ebfn 30. Josei manga c\u00f3 th\u1ec3 mi\u00eau t\u1ea3 nh\u1eefng l\u00e3ng m\u1ea1n th\u1ef1c t\u1ebf , nh\u01b0ng tr\u00e1i ng\u01b0\u1ee3c v\u1edbi h\u1ea7u h\u1ebft c\u00e1c ki\u1ec3u l\u00e3ng m\u1ea1n l\u00ed t\u01b0\u1edfng c\u1ee7a Shoujo manga v\u1edbi c\u1ed1t truy\u1ec7n r\u00f5 r\u00e0ng, ch\u00edn ch\u1eaf',
    },
    {
      id: 20,
      title: 'Live actio',
      slug: 'live-actio',
      description:
        'Truy\u1ec7n \u0111\u00e3 \u0111\u01b0\u1ee3c chuy\u1ec3n th\u1ec3 th\u00e0nh phim',
    },
    {
      id: 21,
      title: 'Manga',
      slug: 'manga',
      description: 'Truy\u1ec7n tranh c\u1ee7a Nh\u1eadt B\u1ea3',
    },
    {
      id: 22,
      title: 'Manhua',
      slug: 'manhua',
      description: 'Truy\u1ec7n tranh c\u1ee7a Trung Qu\u1ed1c',
    },
    {
      id: 23,
      title: 'Manhwa',
      slug: 'manhwa',
      description:
        'Truy\u1ec7n tranh H\u00e0n Qu\u1ed1c, \u0111\u1ecdc t\u1eeb tr\u00e1i sang ph\u1ea3i',
    },
    {
      id: 24,
      title: 'Martial Arts',
      slug: 'martial-arts',
      description:
        'Gi\u1ed1ng v\u1edbi t\u00ean g\u1ecdi, b\u1ea5t c\u1ee9 g\u00ec li\u00ean quan \u0111\u1ebfn v\u00f5 thu\u1eadt trong truy\u1ec7n t\u1eeb c\u00e1c tr\u1eadn \u0111\u00e1nh nhau, t\u1ef1 v\u1ec7 \u0111\u1ebfn c\u00e1c m\u00f4n v\u00f5 thu\u1eadt nh\u01b0 akido, karate, judo hay taekwondo, kendo, c\u00e1c c\u00e1ch n\u00e9 tr\u00e1nh',
    },
    {
      id: 25,
      title: 'Mature',
      slug: 'mature',
      description:
        'Th\u1ec3 lo\u1ea1i d\u00e0nh cho l\u1ee9a tu\u1ed5i 17+ bao g\u1ed3m c\u00e1c pha b\u1ea1o l\u1ef1c, m\u00e1u me, ch\u00e9m gi\u1ebft, t\u00ecnh d\u1ee5c \u1edf m\u1ee9c \u0111\u1ed9 v\u1eeba',
    },
    {
      id: 26,
      title: 'Mecha',
      slug: 'mecha',
      description:
        'Mecha, c\u00f2n \u0111\u01b0\u1ee3c bi\u1ebft \u0111\u1ebfn d\u01b0\u1edbi c\u00e1i t\u00ean meka hay mechs, l\u00e0 th\u1ec3 lo\u1ea1i n\u00f3i t\u1edbi nh\u1eefng c\u1ed7 m\u00e1y bi\u1ebft \u0111i (th\u01b0\u1eddng l\u00e0 do phi c\u00f4ng c\u1ea7m l\u00e1i)',
    },
    {
      id: 27,
      title: 'Mystery',
      slug: 'mystery',
      description:
        'Th\u1ec3 lo\u1ea1i th\u01b0\u1eddng xu\u1ea5t hi\u1ec7n nh\u1eefng \u0111i\u1ec1u b\u00ed \u1ea5n kh\u00f4ng th\u1ec3 l\u00ed gi\u1ea3i \u0111\u01b0\u1ee3c v\u00e0 sau \u0111\u00f3 l\u00e0 nh\u1eefng n\u1ed7 l\u1ef1c c\u1ee7a nh\u00e2n v\u1eadt ch\u00ednh nh\u1eb1m t\u00ecm ra c\u00e2u tr\u1ea3 l\u1eddi th\u1ecfa \u0111\u00e1ng',
    },
    {
      id: 28,
      title: 'Ng\u00f4n T\u00ecnh',
      slug: 'ngon-tinh',
      description:
        'Truy\u1ec7n thu\u1ed9c ki\u1ec3u l\u00e3ng m\u1ea1n, k\u1ec3 v\u1ec1 nh\u1eefng s\u1ef1 ki\u1ec7n vui bu\u1ed3n trong t\u00ecnh y\u00eau c\u1ee7a nh\u00e2n v\u1eadt ch\u00ednh.',
    },
    {
      id: 29,
      title: 'One shot',
      slug: 'one-shot',
      description:
        'Nh\u1eefng truy\u1ec7n ng\u1eafn, th\u01b0\u1eddng l\u00e0 1 chapter',
    },
    {
      id: 30,
      title: 'Psychological',
      slug: 'psychological',
      description:
        'Th\u1ec3 lo\u1ea1i li\u00ean quan \u0111\u1ebfn nh\u1eefng v\u1ea5n \u0111\u1ec1 v\u1ec1 t\u00e2m l\u00fd c\u1ee7a nh\u00e2n v\u1eadt ( t\u00e2m th\u1ea7n b\u1ea5t \u1ed5n, \u0111i\u00ean cu\u1ed3ng ...),N',
    },
    {
      id: 31,
      title: 'Romance',
      slug: 'romance',
      description:
        'Th\u01b0\u1eddng l\u00e0 nh\u1eefng c\u00e2u chuy\u1ec7n v\u1ec1 t\u00ecnh y\u00eau, t\u00ecnh c\u1ea3m l\u00e3ng m\u1ea1n. \u1ede \u0111\u00e2y ch\u00fang ta s\u1ebd l\u1ea5y v\u00ed d\u1ee5 nh\u01b0 t\u00ecnh y\u00eau gi\u1eefa m\u1ed9t ng\u01b0\u1eddi con trai v\u00e0 con g\u00e1i, b\u00ean c\u1ea1nh \u0111\u00f3 \u0111\u1eb7c \u0111i\u1ec3m th\u1ec3 lo\u1ea1i n\u00e0y l\u00e0 k\u00edch th\u00edch tr\u00ed t\u01b0\u1edfng t\u01b0\u1ee3ng c\u1ee7a b\u1ea1n v\u1ec1 t\u00ecnh y\u00eau',
    },
    {
      id: 32,
      title: 'School Life',
      slug: 'school-life',
      description:
        'Trong th\u1ec3 lo\u1ea1i n\u00e0y, ng\u1eef c\u1ea3nh di\u1ec5n bi\u1ebfn c\u00e2u chuy\u1ec7n ch\u1ee7 y\u1ebfu \u1edf tr\u01b0\u1eddng h\u1ecdc',
    },
    {
      id: 33,
      title: 'Sci-fi',
      slug: 'scifi',
      description:
        'Bao g\u1ed3m nh\u1eefng chuy\u1ec7n khoa h\u1ecdc vi\u1ec5n t\u01b0\u1edfng, \u0111a ph\u1ea7n ch\u00fang xoay quanh nhi\u1ec1u hi\u1ec7n t\u01b0\u1ee3ng m\u00e0 li\u00ean quan t\u1edbi khoa h\u1ecdc, c\u00f4ng ngh\u1ec7, tuy v\u1eady th\u01b0\u1eddng th\u00ec nh\u1eefng c\u00e2u chuy\u1ec7n \u0111\u00f3 kh\u00f4ng g\u1eafn b\u00f3 ch\u1eb7t ch\u1ebd v\u1edbi c\u00e1c th\u00e0nh t\u1ef1u khoa h\u1ecdc hi\u1ec7n th\u1eddi, m\u00e0 l\u00e0 do con ng\u01b0\u1eddi t\u01b0\u1edfng t\u01b0\u1ee3ng ra',
    },
    {
      id: 34,
      title: 'Seine',
      slug: 'seine',
      description:
        'Th\u1ec3 lo\u1ea1i c\u1ee7a manga th\u01b0\u1eddng nh\u1eb1m v\u00e0o nh\u1eefng \u0111\u1ed1i t\u01b0\u1ee3ng nam 18 \u0111\u1ebfn 30 tu\u1ed5i, nh\u01b0ng ng\u01b0\u1eddi xem c\u00f3 th\u1ec3 l\u1edbn tu\u1ed5i h\u01a1n, v\u1edbi m\u1ed9t v\u00e0i b\u1ed9 truy\u1ec7n nh\u1eafm \u0111\u1ebfn c\u00e1c doanh nh\u00e2n nam qu\u00e1 40. Th\u1ec3 lo\u1ea1i n\u00e0y c\u00f3 nhi\u1ec1u phong c\u00e1ch ri\u00eang bi\u1ec7t, nh\u01b0ng th\u1ec3 lo\u1ea1i n\u00e0y c\u00f3 nh\u1eefng n\u00e9t ri\u00eang bi\u1ec7t, th\u01b0\u1eddng \u0111\u01b0\u1ee3c ph\u00e2n v\u00e0o nh\u1eefng phong c\u00e1ch ngh\u1ec7 thu\u1eadt r\u1ed9ng h\u01a1n v\u00e0 phong ph\u00fa h\u01a1n v\u1ec1 ch\u1ee7 \u0111\u1ec1, c\u00f3 c\u00e1c lo\u1ea1i t\u1eeb m\u1edbi m\u1ebb ti\u00ean ti\u1ebfn \u0111\u1ebfn khi\u00eau d\u00e2m',
    },
    {
      id: 35,
      title: 'Shoujo',
      slug: 'shoujo',
      description:
        '\u0110\u1ed1i t\u01b0\u1ee3ng h\u01b0\u1edbng t\u1edbi c\u1ee7a th\u1ec3 lo\u1ea1i n\u00e0y l\u00e0 ph\u00e1i n\u1eef. N\u1ed9i dung c\u1ee7a nh\u1eefng b\u1ed9 manga n\u00e0y th\u01b0\u1eddng li\u00ean quan \u0111\u1ebfn t\u00ecnh c\u1ea3m l\u00e3ng m\u1ea1n, ch\u00fa tr\u1ecdng \u0111\u1ea7u t\u01b0 cho nh\u00e2n v\u1eadt (t\u00ednh c\u00e1ch,...)',
    },
    {
      id: 36,
      title: 'Shoujo Ai',
      slug: 'shoujo-ai',
      description:
        'Th\u1ec3 lo\u1ea1i quan h\u1ec7 ho\u1eb7c li\u00ean quan t\u1edbi \u0111\u1ed3ng t\u00ednh n\u1eef, th\u1ec3 hi\u1ec7n trong c\u00e1c m\u1ed1i quan h\u1ec7 tr\u00ean m\u1ee9c b\u00ecnh th\u01b0\u1eddng gi\u1eefa c\u00e1c nh\u00e2n v\u1eadt n\u1eef trong c\u00e1c manga, anime',
    },
    {
      id: 37,
      title: 'Shounen',
      slug: 'shounen',
      description:
        '\u0110\u1ed1i t\u01b0\u1ee3ng h\u01b0\u1edbng t\u1edbi c\u1ee7a th\u1ec3 lo\u1ea1i n\u00e0y l\u00e0 ph\u00e1i nam. N\u1ed9i dung c\u1ee7a nh\u1eefng b\u1ed9 manga n\u00e0y th\u01b0\u1eddng li\u00ean quan \u0111\u1ebfn \u0111\u00e1nh nhau v\u00e0/ho\u1eb7c b\u1ea1o l\u1ef1c (\u1edf m\u1ee9c b\u00ecnh th\u01b0\u1eddng, kh\u00f4ng th\u00e1i qu\u00e1)',
    },
    {
      id: 38,
      title: 'Shounen Ai',
      slug: 'shounen-ai',
      description:
        'Th\u1ec3 lo\u1ea1i c\u00f3 n\u1ed9i dung v\u1ec1 t\u00ecnh y\u00eau gi\u1eefa nh\u1eefng ch\u00e0ng trai tr\u1ebb, mang t\u00ednh ch\u1ea5t l\u00e3ng m\u1ea1n nh\u01b0ng kh\u00f4ng \u0111\u1ec1 c\u1eadp \u0111\u1ebfn quan h\u1ec7 t\u00ecnh d\u1ee5c',
    },
    {
      id: 39,
      title: 'Slice of Life',
      slug: 'slice-of-life',
      description:
        'N\u00f3i v\u1ec1 cu\u1ed9c s\u1ed1ng \u0111\u1eddi th\u01b0\u1eddng',
    },
    {
      id: 40,
      title: 'Smut',
      slug: 'smut',
      description:
        'Nh\u1eefng truy\u1ec7n c\u00f3 n\u1ed9i dung h\u01a1i nh\u1ea1y c\u1ea3m, \u0111\u1eb7c bi\u1ec7t l\u00e0 li\u00ean quan \u0111\u1ebfn t\u00ecnh d\u1ee5c',
    },
    {
      id: 41,
      title: 'Soft Yaoi',
      slug: 'soft-yaoi',
      description: 'Boy x Boy. N\u1eb7ng h\u01a1n Shounen Ai t\u00ed.',
    },
    {
      id: 42,
      title: 'Soft Yuri',
      slug: 'soft-yuri',
      description: 'Girl x Girl. N\u1eb7ng h\u01a1n Shoujo Ai t\u00ed',
    },
    {
      id: 43,
      title: 'Sports',
      slug: 'sports',
      description:
        '\u0110\u00fang nh\u01b0 t\u00ean g\u1ecdi, nh\u1eefng m\u00f4n th\u1ec3 thao nh\u01b0 b\u00f3ng \u0111\u00e1, b\u00f3ng ch\u00e0y, b\u00f3ng chuy\u1ec1n, \u0111ua xe, c\u1ea7u l\u00f4ng,... l\u00e0 m\u1ed9t ph\u1ea7n c\u1ee7a th\u1ec3 lo\u1ea1i n\u00e0y',
    },
    {
      id: 44,
      title: 'Supernatural',
      slug: 'supernatural',
      description:
        'Th\u1ec3 hi\u1ec7n nh\u1eefng s\u1ee9c m\u1ea1nh \u0111\u00e1ng kinh ng\u1ea1c v\u00e0 kh\u00f4ng th\u1ec3 gi\u1ea3i th\u00edch \u0111\u01b0\u1ee3c, ch\u00fang th\u01b0\u1eddng \u0111i k\u00e8m v\u1edbi nh\u1eefng s\u1ef1 ki\u1ec7n tr\u00e1i ng\u01b0\u1ee3c ho\u1eb7c th\u00e1ch th\u1ee9c v\u1edbi nh\u1eefng \u0111\u1ecbnh lu\u1eadt v\u1eadt l\u00fd',
    },
    {
      id: 45,
      title: 'Thi\u1ebfu Nhi',
      slug: 'thieu-nhi',
      description:
        'Truy\u1ec7n tranh d\u00e0nh cho l\u1ee9a tu\u1ed5i thi\u1ebfu nhi',
    },
    {
      id: 46,
      title: 'Tragedy',
      slug: 'tragedy',
      description:
        'Th\u1ec3 lo\u1ea1i ch\u1ee9a \u0111\u1ef1ng nh\u1eefng s\u1ef1 ki\u1ec7n m\u00e0 d\u1eabn \u0111\u1ebfn k\u1ebft c\u1ee5c l\u00e0 nh\u1eefng m\u1ea5t m\u00e1t hay s\u1ef1 r\u1ee7i ro to l\u1edb',
    },
    {
      id: 47,
      title: 'Trinh Th\u00e1m',
      slug: 'trinh-tham',
      description:
        'C\u00e1c truy\u1ec7n c\u00f3 n\u1ed9i dung v\u1ec1 c\u00e1c v\u1ee5 \u00e1n, c\u00e1c th\u00e1m t\u1eed c\u1ea3nh s\u00e1t \u0111i\u1ec1u tra...',
    },
    {
      id: 48,
      title: 'Truy\u1ec7n sca',
      slug: 'truyen-sca',
      description:
        'C\u00e1c truy\u1ec7n \u0111\u00e3 ph\u00e1t h\u00e0nh t\u1ea1i VN \u0111\u01b0\u1ee3c scan \u0111\u0103ng online',
    },
    {
      id: 49,
      title: 'Truy\u1ec7n M\u00e0u',
      slug: 'truyen-mau',
      description:
        'T\u1ed5ng h\u1ee3p truy\u1ec7n tranh m\u00e0u, r\u00f5, \u0111\u1eb9p',
    },
    {
      id: 50,
      title: 'Webtoo',
      slug: 'webtoo',
      description:
        'L\u00e0 truy\u1ec7n tranh \u0111\u01b0\u1ee3c \u0111\u0103ng d\u00e0i k\u1ef3 tr\u00ean internet c\u1ee7a H\u00e0n Qu\u1ed1c ch\u1ee9 kh\u00f4ng xu\u1ea5t b\u1ea3n theo c\u00e1ch th\u00f4ng th\u01b0\u1eddng',
    },
    {
      id: 51,
      title: 'Xuy\u00ean Kh\u00f4ng',
      slug: 'xuyen-khong',
      description:
        'Xuy\u00ean Kh\u00f4ng, Xuy\u00ean Vi\u1ec7t l\u00e0 th\u1ec3 lo\u1ea1i nh\u00e2n v\u1eadt ch\u00ednh v\u00ec m\u1ed9t l\u00fd do n\u00e0o \u0111\u00f3 m\u00e0 b\u1ecb \u0111\u01b0a \u0111\u1ebfn sinh s\u1ed1ng \u1edf m\u1ed9t kh\u00f4ng gian hay m\u1ed9t kho\u1ea3ng th\u1eddi gian kh\u00e1c. Nh\u00e2n v\u1eadt ch\u00ednh c\u00f3 th\u1ec3 tr\u1ef1c ti\u1ebfp xuy\u00ean qua b\u1eb1ng th\u00e2n x\u00e1c m\u00ecnh ho\u1eb7c s\u1ed1ng l\u1ea1i b\u1eb1ng th\u00e2n x\u00e1c ng\u01b0\u1eddi kh\u00e1c.',
    },
  ];

  data: Comic[];
  constructor() {
    this.data = [
      {
        id: 21854,
        title: 'Võ Luyện Đỉnh Phong',
        url: 'vo-luyen-dinh-phong',
        author: 'Đang cập nhật',
        description: null,
        coverImage:
          'https://images.unsplash.com/photo-1520769669658-f07657f5a307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        status: 0,
        rating: 10,
        viewCount: 1077998102,
        updateAt: '2024-04-04T10:01:00',
        genres: [
          {
            id: 1,
            title: 'Action',
          },
          {
            id: 14,
            title: 'Fantasy',
          },
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 37,
            title: 'Shounen',
          },
          {
            id: 44,
            title: 'Supernatural',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 1586153,
            title: 'Chapter 3',
            chapterNumber: 3,
            viewCount: 45363,
            updateAt: '2018-01-14T00:00:00',
          },
          {
            id: 1586152,
            title: 'Chapter 2',
            chapterNumber: 2,
            viewCount: 568890,
            updateAt: '2018-01-03T00:00:00',
          },
          {
            id: 1586151,
            title: 'Chapter 1',
            chapterNumber: 1,
            viewCount: 425535,
            updateAt: '2018-01-02T00:00:00',
          },
        ],
      },
      {
        id: 19942,
        title: 'Toàn Chức Pháp Sư',
        url: 'toan-chuc-phap-su',
        author: 'Đang cập nhật',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 313551415,
        updateAt: '2024-04-10T13:08:00',
        genres: [
          {
            id: 1,
            title: 'Action',
          },
          {
            id: 3,
            title: 'Adventure',
          },
          {
            id: 14,
            title: 'Fantasy',
          },
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 27,
            title: 'Mystery',
          },
          {
            id: 37,
            title: 'Shounen',
          },
          {
            id: 44,
            title: 'Supernatural',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 1492224,
            title: 'Chapter 3',
            chapterNumber: 3,
            viewCount: 480312,
            updateAt: '2018-02-20T00:00:00',
          },
          {
            id: 1492223,
            title: 'Chapter 2',
            chapterNumber: 2,
            viewCount: 543911,
            updateAt: '2018-02-18T00:00:00',
          },
          {
            id: 1492222,
            title: 'Chapter 1',
            chapterNumber: 1,
            viewCount: 893090,
            updateAt: '2018-02-17T00:00:00',
          },
        ],
      },
      {
        id: 20870,
        title: 'Trọng Sinh Đô Thị Tu Tiên',
        url: 'trong-sinh-do-thi-tu-tien',
        author: 'Đang cập nhật',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 284999504,
        updateAt: '2024-04-05T12:26:00',
        genres: [
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 24,
            title: 'Martial Arts',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 1537192,
            title: 'Chapter 1',
            chapterNumber: 1,
            viewCount: 281571,
            updateAt: '2018-08-24T00:00:00',
          },
          {
            id: 1537193,
            title: 'Chapter 2',
            chapterNumber: 2,
            viewCount: 177433,
            updateAt: '2018-08-25T00:00:00',
          },
          {
            id: 1537194,
            title: 'Chapter 3',
            chapterNumber: 3,
            viewCount: 451664,
            updateAt: '2018-08-26T00:00:00',
          },
        ],
      },
      {
        id: 2389,
        title: 'Bách Luyện Thành Thần',
        url: 'bach-luyen-thanh-than',
        author: 'Đang cập nhật',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 260989538,
        updateAt: '2024-04-10T18:15:00',
        genres: [
          {
            id: 1,
            title: 'Action',
          },
          {
            id: 11,
            title: 'Drama',
          },
          {
            id: 27,
            title: 'Mystery',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 855013,
            title: 'Chapter 1',
            chapterNumber: 1,
            viewCount: 1199075,
            updateAt: '2015-10-13T00:00:00',
          },
          {
            id: 855014,
            title: 'Chapter 2',
            chapterNumber: 2,
            viewCount: 736770,
            updateAt: '2015-10-16T00:00:00',
          },
          {
            id: 855015,
            title: 'Chapter 3',
            chapterNumber: 3,
            viewCount: 642205,
            updateAt: '2015-10-27T00:00:00',
          },
        ],
      },
      {
        id: 5452,
        title: 'Đại Quản Gia Là Ma Hoàng',
        url: 'dai-quan-gia-la-ma-hoang',
        author: 'Mộng Tiên Giới',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 240999737,
        updateAt: '2024-04-06T10:54:00',
        genres: [
          {
            id: 3,
            title: 'Adventure',
          },
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 976040,
            title: 'Chapter 0',
            chapterNumber: 1,
            viewCount: 846922,
            updateAt: '2019-04-17T00:00:00',
          },
          {
            id: 976041,
            title: 'Chapter 1',
            chapterNumber: 2,
            viewCount: 888668,
            updateAt: '2019-04-21T00:00:00',
          },
          {
            id: 976042,
            title: 'Chapter 2',
            chapterNumber: 3,
            viewCount: 169919,
            updateAt: '2019-04-30T00:00:00',
          },
        ],
      },
      {
        id: 8339,
        title: 'Hệt Như Hàn Quang Gặp Nắng Gắt',
        url: 'het-nhu-han-quang-gap-nang-gat',
        author: 'Team Nhà Đá - Thần Mộng Team',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 231033400,
        updateAt: '2024-04-07T02:14:00',
        genres: [
          {
            id: 5,
            title: 'Chuyển Sinh',
          },
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 28,
            title: 'Ngôn Tình',
          },
          {
            id: 31,
            title: 'Romance',
          },
        ],
        chapters: [
          {
            id: 1080911,
            title: 'Chapter 2',
            chapterNumber: 3,
            viewCount: 987672,
            updateAt: '2020-03-25T00:00:00',
          },
          {
            id: 1080910,
            title: 'Chapter 1',
            chapterNumber: 2,
            viewCount: 1061083,
            updateAt: '2020-03-25T00:00:00',
          },
          {
            id: 1080909,
            title: 'Chapter 0',
            chapterNumber: 1,
            viewCount: 1279185,
            updateAt: '2020-03-25T00:00:00',
          },
        ],
      },
      {
        id: 5487,
        title: 'Đại Vương Tha Mạng',
        url: 'dai-vuong-tha-mang',
        author: 'Duyệt Động văn hóa',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 215095032,
        updateAt: '2024-04-08T11:16:00',
        genres: [
          {
            id: 6,
            title: 'Comedy',
          },
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 44,
            title: 'Supernatural',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 978901,
            title: 'Chapter 3',
            chapterNumber: 3,
            viewCount: 684160,
            updateAt: '2019-12-13T00:00:00',
          },
          {
            id: 978900,
            title: 'Chapter 2',
            chapterNumber: 2,
            viewCount: 739502,
            updateAt: '2019-12-13T00:00:00',
          },
          {
            id: 978899,
            title: 'Chapter 1',
            chapterNumber: 1,
            viewCount: 977664,
            updateAt: '2019-12-13T00:00:00',
          },
        ],
      },
      {
        id: 13833,
        title: 'Nguyên Tôn',
        url: 'nguyen-ton',
        author: 'Thiên Tằm Thổ Đậu',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 215046229,
        updateAt: '2024-04-09T21:50:00',
        genres: [
          {
            id: 1,
            title: 'Action',
          },
          {
            id: 3,
            title: 'Adventure',
          },
          {
            id: 14,
            title: 'Fantasy',
          },
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 27,
            title: 'Mystery',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 1267820,
            title: 'Chapter 1',
            chapterNumber: 1,
            viewCount: 1100662,
            updateAt: '2017-12-08T00:00:00',
          },
          {
            id: 1267821,
            title: 'Chapter 2',
            chapterNumber: 2,
            viewCount: 660555,
            updateAt: '2017-12-11T00:00:00',
          },
          {
            id: 1267822,
            title: 'Chapter 3',
            chapterNumber: 3,
            viewCount: 588345,
            updateAt: '2017-12-15T00:00:00',
          },
        ],
      },
      {
        id: 22649,
        title: 'Yêu Thần Ký',
        url: 'yeu-than-ky',
        author: 'Mad Snail',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 209289583,
        updateAt: '2024-04-10T13:08:00',
        genres: [
          {
            id: 1,
            title: 'Action',
          },
          {
            id: 14,
            title: 'Fantasy',
          },
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 37,
            title: 'Shounen',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 1624682,
            title: 'Chapter 1',
            chapterNumber: 1,
            viewCount: 621794,
            updateAt: '2015-08-22T00:00:00',
          },
          {
            id: 1624683,
            title: 'Chapter 2',
            chapterNumber: 2,
            viewCount: 371075,
            updateAt: '2015-08-22T00:00:00',
          },
          {
            id: 1624684,
            title: 'Chapter 3',
            chapterNumber: 3,
            viewCount: 325048,
            updateAt: '2015-08-23T00:00:00',
          },
        ],
      },
      {
        id: 20683,
        title: 'Trên Người Ta Có Một Con Rồng',
        url: 'tren-nguoi-ta-co-mot-con-rong',
        author: 'Đang cập nhật',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 187402671,
        updateAt: '2023-05-10T21:29:00',
        genres: [
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 24,
            title: 'Martial Arts',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 1527033,
            title: 'Chapter 3',
            chapterNumber: 3,
            viewCount: 657881,
            updateAt: '2019-07-23T00:00:00',
          },
          {
            id: 1527032,
            title: 'Chapter 2',
            chapterNumber: 2,
            viewCount: 743015,
            updateAt: '2019-07-21T00:00:00',
          },
          {
            id: 1527031,
            title: 'Chapter 1',
            chapterNumber: 1,
            viewCount: 930747,
            updateAt: '2019-06-16T00:00:00',
          },
        ],
      },
      {
        id: 4662,
        title: 'Cô Vợ Hợp Đồng Bỏ Trốn Của Tổng Giám Đốc',
        url: 'co-vo-hop-dong-bo-tron-cua-tong-giam-doc',
        author: 'Niêm Hoa Phất Liễu',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 182795525,
        updateAt: '2023-05-29T21:01:00',
        genres: [
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 28,
            title: 'Ngôn Tình',
          },
          {
            id: 31,
            title: 'Romance',
          },
          {
            id: 35,
            title: 'Shoujo',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
        ],
        chapters: [
          {
            id: 939807,
            title: 'Chapter 2.1',
            chapterNumber: 3,
            viewCount: 931760,
            updateAt: '2018-02-04T00:00:00',
          },
          {
            id: 939806,
            title: 'Chapter 1.2',
            chapterNumber: 2,
            viewCount: 1034371,
            updateAt: '2018-02-01T00:00:00',
          },
          {
            id: 939805,
            title: 'Chapter 1.1',
            chapterNumber: 1,
            viewCount: 1353457,
            updateAt: '2018-02-01T00:00:00',
          },
        ],
      },
      {
        id: 21357,
        title: 'Tuyệt Thế Võ Thần',
        url: 'tuyet-the-vo-than',
        author: 'Tịnh Vô Ngân',
        description: null,
        coverImage:
          'https://static.doctruyenonline.vn/images/vu-luyen-dien-phong.jpg',
        status: 0,
        rating: 10,
        viewCount: 166418531,
        updateAt: '2024-04-08T11:27:00',
        genres: [
          {
            id: 1,
            title: 'Action',
          },
          {
            id: 5,
            title: 'Chuyển Sinh',
          },
          {
            id: 22,
            title: 'Manhua',
          },
          {
            id: 27,
            title: 'Mystery',
          },
          {
            id: 49,
            title: 'Truyện Màu',
          },
          {
            id: 51,
            title: 'Xuyên Không',
          },
        ],
        chapters: [
          {
            id: 1565826,
            title: 'Chapter 2',
            chapterNumber: 2,
            viewCount: 1022898,
            updateAt: '2016-11-10T00:00:00',
          },
          {
            id: 1565825,
            title: 'Chapter 1',
            chapterNumber: 1,
            viewCount: 1678333,
            updateAt: '2016-11-09T00:00:00',
          },
          {
            id: 1565827,
            title: 'Chapter 3',
            chapterNumber: 3,
            viewCount: 798249,
            updateAt: '2016-11-11T00:00:00',
          },
        ],
      },
    ];
  }
  get(url: string): Observable<any> {
    switch (url) {
      case '/comics':
        return of({ data: this.data });
      case '/top-comics':
        return of(this.data.slice(0, 5)); // top 5 demo
      case '/genres':
        return of(this.listGenre);
      default:
        const id = Number(
          url.substring(url.lastIndexOf('/')).match(/\d+/)?.[0]
        );
        const comicById = this.data?.find((comic) => comic.id === id);
        return of({ data: comicById });
    }
  }
}
