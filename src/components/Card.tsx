import React from 'react';
import ChipLightIcon from '@/assets/svgs/chip-light.svg';
import ChipDarkIcon from '@/assets/svgs/chip-dark.svg';
import CardRingLightIcon from '@/assets/svgs/card-ring-light.svg';
import CardRingDarkIcon from '@/assets/svgs/card-ring-dark.svg';
import { Card, CardType } from '@/types/card';

interface CardItemProps {
  card: Card;
  type: CardType;
}

const CardItem: React.FC<CardItemProps> = ({ card, type }) => {
  const isDark = type === 'paypal';

  return (
    <div
      className={`w-full overflow-hidden rounded-[20px] transition-all duration-200 ${
        isDark
          ? 'bg-gradient-to-b from-[#2C3A4E] to-[#1C2631] text-white'
          : 'border border-[#E4E4E4] bg-white text-[#27364B]'
      }`}>
      <div className="p-4 sm:p-6">
        <div className="mb-4 sm:mb-8 flex items-start justify-between">
          <div>
            <div
              className={`text-xs sm:text-sm font-medium ${
                isDark ? 'text-white' : 'text-[#718ebf]'
              }`}>
              Balance
            </div>
            <div
              className={`mt-1 text-lg sm:text-2xl font-semibold ${
                isDark ? 'text-white' : 'text-[#343c6a]'
              }`}>
              ${card.balance.toLocaleString()}
            </div>
          </div>
          <img
            width={35}
            height={35}
            src={isDark ? ChipLightIcon : ChipDarkIcon}
            alt="chip-picture"
          />
        </div>
        <div className="mb-1 sm:mb-2 flex justify-between">
          <div>
            <div
              className={`text-xs font-medium ${
                isDark ? 'text-white/60' : 'text-[#718ebf]'
              }`}>
              CARD HOLDER
            </div>
            <div
              className={`${
                isDark ? 'text-white' : 'text-[#343c6a]'
              } mt-1 text-xs sm:text-sm font-medium`}>
              {card.name}
            </div>
          </div>
          <div className="text-right">
            <div
              className={`text-xs font-medium ${
                isDark ? 'text-white/60' : 'text-[#718ebf]'
              }`}>
              VALID THRU
            </div>
            <div
              className={`${
                isDark ? 'text-white' : 'text-[#343c6a]'
              } mt-1 text-xs sm:text-sm font-medium`}>
              {card.validity}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex items-center justify-between p-4 sm:p-6 ${isDark ? 'bg-linear-to-br from-[#2C3A4E] to-[#1C2631]' : 'border-t border-t-slate-200'}`}>
        <div
          className={`text-sm sm:text-base font-medium tracking-[2px] sm:tracking-[3px] ${
            isDark ? 'text-white' : 'text-[#343c6a]'
          }`}>
          {card.number}
        </div>
        <div className="flex -space-x-2">
          <img
            width={44}
            height={30}
            src={isDark ? CardRingLightIcon : CardRingDarkIcon}
            alt="rings"
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
