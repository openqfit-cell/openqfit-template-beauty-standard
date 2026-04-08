/**
 * UI 섹션/기능 컴포넌트
 * - 화면 표시 전용 파일입니다.
 * - 실제 문구/이미지/링크 값은 data 폴더에서 가져오고, 이 파일은 레이아웃과 표현 방식만 담당합니다.
 * - 템플릿 재사용 시 디자인 유지와 데이터 교체를 분리하기 위해 이런 구조로 관리합니다.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "motion/react";

type CountUpProps = {
  value: string;
  duration?: number;
  steps?: number;
  autoSkipNonCountable?: boolean; // 전화번호/날짜 자동 제외 옵션
};

type Token =
  | { type: "text"; value: string }
  | {
      type: "number";
      raw: string;
      target: number;
      decimals: number;
      hasComma: boolean;
    };

function parseTokens(input: string): Token[] {
  const regex = /(\d[\d,]*\.?\d*)/g;
  const tokens: Token[] = [];
  let lastIndex = 0;

  for (const match of input.matchAll(regex)) {
    const matchText = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      tokens.push({
        type: "text",
        value: input.slice(lastIndex, index),
      });
    }

    const clean = matchText.replace(/,/g, "");
    const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;

    tokens.push({
      type: "number",
      raw: matchText,
      target: Number(clean),
      decimals,
      hasComma: matchText.includes(","),
    });

    lastIndex = index + matchText.length;
  }

  if (lastIndex < input.length) {
    tokens.push({
      type: "text",
      value: input.slice(lastIndex),
    });
  }

  return tokens;
}

function formatNumber(
  value: number,
  decimals: number,
  useGrouping: boolean
): string {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  });
}

function buildInitialDisplay(tokens: Token[]) {
  return tokens
    .map((token) => {
      if (token.type === "text") return token.value;
      return formatNumber(0, token.decimals, token.hasComma);
    })
    .join("");
}

function isLikelyPhone(value: string) {
  const text = value.trim();

  // 숫자/공백/괄호/+/-/. 만 허용되는 경우만 전화번호 후보로 판단
  if (!/^[\d+\-().\s]+$/.test(text)) return false;

  const digitsOnly = text.replace(/\D/g, "");

  // 너무 짧거나 길면 전화번호로 보지 않음
  if (digitsOnly.length < 8 || digitsOnly.length > 12) return false;

  const phonePatterns = [
    /^(\+?82[-.\s]?)?(0\d{1,2}[-.\s]?\d{3,4}[-.\s]?\d{4})$/, // 한국 전화번호
    /^\d{2,4}[-.\s]?\d{3,4}[-.\s]?\d{4}$/, // 일반 전화번호
  ];

  return phonePatterns.some((pattern) => pattern.test(text));
}

function isLikelyDate(value: string) {
  const text = value.trim();

  const datePatterns = [
    /^\d{4}[./-]\d{1,2}[./-]\d{1,2}$/, // 2026-04-08 / 2026.04.08
    /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}$/, // 04-08-2026 / 4.8.26
    /^\d{4}\s*년\s*\d{1,2}\s*월\s*\d{1,2}\s*일$/, // 2026년 4월 8일
    /^\d{1,2}\s*월\s*\d{1,2}\s*일$/, // 4월 8일
  ];

  return datePatterns.some((pattern) => pattern.test(text));
}

function shouldSkipAnimation(value: string, autoSkipNonCountable: boolean) {
  if (!autoSkipNonCountable) return false;
  return isLikelyPhone(value) || isLikelyDate(value);
}

export function CountUp({
  value,
  duration = 1200,
  steps = 30,
  autoSkipNonCountable = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const tokens = useMemo(() => parseTokens(value), [value]);
  const skipAnimation = useMemo(
    () => shouldSkipAnimation(value, autoSkipNonCountable),
    [value, autoSkipNonCountable]
  );

  const initialDisplay = useMemo(() => {
    if (skipAnimation) return value;
    return buildInitialDisplay(tokens);
  }, [tokens, value, skipAnimation]);

  const [displayValue, setDisplayValue] = useState(initialDisplay);

  useEffect(() => {
    setDisplayValue(initialDisplay);
  }, [initialDisplay]);

  useEffect(() => {
    if (!isInView) return;

    if (skipAnimation) {
      setDisplayValue(value);
      return;
    }

    const hasNumber = tokens.some((token) => token.type === "number");
    if (!hasNumber) {
      setDisplayValue(value);
      return;
    }

    let frame = 0;

    const timer = setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / steps, 1);

      const next = tokens
        .map((token) => {
          if (token.type === "text") return token.value;

          const current = token.target * progress;
          const rounded =
            token.decimals > 0
              ? Number(current.toFixed(token.decimals))
              : Math.round(current);

          return formatNumber(rounded, token.decimals, token.hasComma);
        })
        .join("");

      setDisplayValue(next);

      if (progress >= 1) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, skipAnimation, tokens, value, duration, steps]);

  return <span ref={ref}>{displayValue}</span>;
}