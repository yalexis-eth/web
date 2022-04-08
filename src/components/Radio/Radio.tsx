import { CheckIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ButtonProps,
  useId,
  useRadio,
  useRadioGroup,
  UseRadioProps,
} from '@chakra-ui/react'
import { ThemeTypings } from '@chakra-ui/styled-system'
import { HistoryTimeframe } from '@shapeshiftoss/types'
import Polyglot, { InterpolationOptions } from 'node-polyglot'
import { memo } from 'react'
import { useTranslate } from 'react-polyglot'
import { CircularProgress } from 'components/CircularProgress/CircularProgress'
import { Text } from 'components/Text'

interface RadioCardProps extends UseRadioProps {
  label: string | [string, number | Polyglot.InterpolationOptions]
  showCheck?: boolean
  checkColor?: string
  radioProps?: ButtonProps
  isLoading?: boolean
}

const RadioCard = memo((props: RadioCardProps) => {
  const { id, label, showCheck, checkColor, isChecked, radioProps, isLoading } = props
  const contextualId = useId(id)
  const { getInputProps, getCheckboxProps } = useRadio({ id: contextualId, ...props })
  const input = getInputProps()
  const checkbox = getCheckboxProps()
  const translate: (phrase: string, options?: number | InterpolationOptions) => string =
    useTranslate()
  const ariaLabel = typeof label === 'string' ? label : translate(...label)
  const checkStyle = checkColor ? { color: checkColor } : undefined
  const buttonPadding = showCheck && !isChecked ? { paddingLeft: 38 } : undefined
  return (
    <>
      <Button
        aria-label={ariaLabel}
        as='label'
        htmlFor={input.id}
        cursor='pointer'
        isDisabled={isLoading}
        {...checkbox}
        {...buttonPadding}
        {...radioProps}
      >
        {showCheck &&
          isChecked &&
          (isLoading ? (
            <CircularProgress size='14px' mr={3} />
          ) : (
            <CheckIcon {...checkStyle} mr={3} />
          ))}
        <Text translation={label} />
      </Button>
      <input {...input} />
    </>
  )
})

export interface RadioOption<T> {
  label: string | [string, number | Polyglot.InterpolationOptions]
  value: T
}

export interface RadioProps<T> {
  name?: string
  defaultValue?: T
  options: RadioOption<T>[]
  onChange: (value: T) => void
  variant?: string
  colorScheme?: ThemeTypings['colorSchemes']
  buttonGroupProps?: ButtonGroupProps
  radioProps?: ButtonProps
  showCheck?: boolean
  checkColor?: string
  isLoading?: boolean
}

type RadioTypes = string | HistoryTimeframe

export const Radio = <T extends RadioTypes>({
  name,
  options,
  onChange,
  defaultValue,
  variant = 'ghost',
  colorScheme = 'blue',
  buttonGroupProps,
  radioProps,
  showCheck = false,
  checkColor,
  isLoading,
}: RadioProps<T>) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name ?? 'radio',
    defaultValue,
    onChange,
  })

  const group = getRootProps()

  return (
    <ButtonGroup
      {...group}
      variant={variant}
      colorScheme={colorScheme}
      size='sm'
      {...buttonGroupProps}
    >
      {options.map(option => {
        return (
          <RadioCard
            key={option.value}
            {...getRadioProps({ value: option.value })}
            showCheck={showCheck}
            checkColor={checkColor}
            label={option.label}
            radioProps={radioProps}
            isLoading={isLoading}
          />
        )
      })}
    </ButtonGroup>
  )
}
