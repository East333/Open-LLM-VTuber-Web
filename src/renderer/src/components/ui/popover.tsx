import { Popover as ChakraPopover, Portal } from '@chakra-ui/react';
import * as React from 'react';
import { CloseButton } from './close-button';

interface PopoverContentProps extends ChakraPopover.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
}

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>((props, ref) => {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraPopover.Positioner>
        <ChakraPopover.Content ref={ref} {...rest} />
      </ChakraPopover.Positioner>
    </Portal>
  );
});

export const PopoverArrow = React.forwardRef<
  HTMLDivElement,
  ChakraPopover.ArrowProps
>((props, ref) => (
  <ChakraPopover.Arrow {...props} ref={ref}>
    <ChakraPopover.ArrowTip />
  </ChakraPopover.Arrow>
));

export const PopoverCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPopover.CloseTriggerProps
>((props, ref) => (
  <ChakraPopover.CloseTrigger
    position="absolute"
    top="1"
    insetEnd="1"
    {...props}
    asChild
    ref={ref}
  >
    <CloseButton size="sm" />
  </ChakraPopover.CloseTrigger>
));

export const PopoverTitle = ChakraPopover.Title;
export const PopoverDescription = ChakraPopover.Description;
export const PopoverFooter = ChakraPopover.Footer;
export const PopoverHeader = ChakraPopover.Header;
export const PopoverRoot = ChakraPopover.Root;
export const PopoverBody = ChakraPopover.Body;
export const PopoverTrigger = ChakraPopover.Trigger;
