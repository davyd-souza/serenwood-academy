// COMPONENT
import { InputField, InputPrefix, InputRoot } from '@/components/Form/Input'
import {
  FileInputRoot,
  FileInputTrigger,
  FileInputControl,
  FileInputImagePreview,
  FileInputList,
} from '@/components/Form/FileInput'
import { Button } from '@/components/Button'
import { CountrySelect } from '@/app/(home)/CountrySelect'
import { TimezoneSelect } from '@/app/(home)/TimezoneSelect'
import { BioTextEditor } from '@/app/(home)/BioTextEditor'

// ASSET
import { Mail } from 'lucide-react'

export function MyDetailsTab() {
  return (
    <section className="space-y-6 py-8">
      <header className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800 md:flex-row">
        <div className="space-y-1">
          <h2 className="text-lg font-medium">Personal info</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-300">
            Update your photo and personal details here.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" form="my-details">
            Save
          </Button>
        </div>
      </header>

      <form
        id="my-details"
        className="flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-800"
      >
        <div className="flex flex-col gap-2 md:grid md:grid-cols-form md:gap-8">
          <label htmlFor="first-name" className="text-sm font-medium">
            Name
          </label>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
            <InputRoot>
              <InputField id="first-name" type="text" placeholder="Davyd" />
            </InputRoot>

            <div className="flex flex-col gap-2 md:block">
              <label
                htmlFor="last-name"
                className="text-sm font-medium md:sr-only"
              >
                Last name
              </label>

              <InputRoot>
                <InputField id="last-name" type="text" placeholder="Souza" />
              </InputRoot>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 md:grid md:grid-cols-form md:gap-8">
          <label htmlFor="email" className="text-sm font-medium">
            Email address
          </label>

          <InputRoot>
            <InputPrefix asChild>
              <Mail className="h-5 min-h-max w-5 min-w-max text-zinc-500 dark:text-zinc-400" />
            </InputPrefix>
            <InputField id="email" type="email" placeholder="email@mail.com" />
          </InputRoot>
        </div>

        <div className="flex flex-col gap-8 pt-5 md:grid md:grid-cols-form">
          <label htmlFor="photo" className="text-sm font-medium">
            Your photo
            <span className="block text-sm font-normal text-zinc-500 dark:text-zinc-300">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInputRoot className="flex flex-col gap-5 md:flex-row md:items-start">
            <FileInputImagePreview />
            <FileInputTrigger />
            <FileInputControl />
          </FileInputRoot>
        </div>

        <div className="flex flex-col gap-2 pt-5 md:grid md:grid-cols-form md:gap-8">
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <InputRoot>
            <InputField
              id="role"
              type="text"
              placeholder="ex.: Product Manager"
            />
          </InputRoot>
        </div>

        <div className="flex flex-col gap-2 pt-5 md:grid md:grid-cols-form md:gap-8">
          <label htmlFor="country" className="text-sm font-medium">
            Country
          </label>
          <CountrySelect />
        </div>

        <div className="flex flex-col gap-2 pt-5 md:grid md:grid-cols-form md:gap-8">
          <label htmlFor="timezone" className="text-sm font-medium">
            Timezone
          </label>

          <TimezoneSelect />
        </div>

        <div className="flex flex-col gap-2 pt-5 md:grid md:grid-cols-form md:gap-8">
          <label htmlFor="bio" className="text-sm font-medium">
            Bio
            <span className="block text-sm font-normal text-zinc-500 dark:text-zinc-300">
              Write a short introduction.
            </span>
          </label>

          <BioTextEditor />
        </div>

        <div className="flex flex-col gap-8 pt-5 md:grid md:grid-cols-form">
          <label htmlFor="portfolio" className="text-sm font-medium">
            Portfolio projects
            <span className="block text-sm font-normal text-zinc-500 dark:text-zinc-300">
              Share a few snippets of your work.
            </span>
          </label>

          <FileInputRoot>
            <FileInputTrigger />
            <FileInputList />
            <FileInputControl multiple />
          </FileInputRoot>
        </div>
      </form>

      <footer className="flex items-center justify-end gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-700">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit" form="my-details">
          Save
        </Button>
      </footer>
    </section>
  )
}
