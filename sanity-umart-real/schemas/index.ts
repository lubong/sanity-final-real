// schemas/index.js
import {HomeBanner} from './Home/HomeBanner'
import {HomeCardImages} from './Home/HomeCardImages'
import {HomeTextBlock} from './Home/HomeTextBlock'

import {AboutTestimonials} from './About/AboutTestimonials'
import {AboutTextBlock} from './About/AboutTextBlock'
import {AboutImageGallery} from './About/AboutImageGallery'

import {PromoTextBlock} from './Promotions/PromoTextBlock'
import {PromoItems} from './Promotions/PromoItems'

import {CareerJobs} from './Career/CareerJobs'
import {CareerTextBlock} from './Career/CareerTextBlock'

import {NewsPosts} from './News/NewsPosts'

import {TextImageBlock} from './PageTypes/TextImageBlock'
import {ImageGallery} from './PageTypes/ImageGallery'

import {LocationTextBlock} from './Location/LocationTextBlock'
import {LocationsImageGallery} from './Location/LocationsImageGallery'

import {InvestorInfoTextBlock} from './InvestorInfo/InvestorInfoTextBlock'


export const schemaTypes = [InvestorInfoTextBlock, NewsPosts, CareerJobs, CareerTextBlock, PromoTextBlock, PromoItems, AboutTestimonials , AboutTextBlock, AboutImageGallery, HomeBanner, HomeCardImages, HomeTextBlock , ImageGallery , TextImageBlock, LocationTextBlock, LocationsImageGallery]