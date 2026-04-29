import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Plus, Filter, UserPlus } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const CreateConsult: Story = {
  args: {
    variant: "primary",
    icon: Plus,
    children: "Create consult",
  },
};

export const NewPatient: Story = {
  args: {
    variant: "secondary",
    pill: true,
    icon: UserPlus,
    children: "New Patient",
  },
};

export const Filters: Story = {
  args: {
    variant: "ghost",
    icon: Filter,
    children: "Filters",
  },
};

export const IconRight: Story = {
  args: {
    variant: "primary",
    iconPlacement: "right",
    children: "Add Item",
  },
};